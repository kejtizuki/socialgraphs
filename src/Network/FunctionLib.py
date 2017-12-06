import xml.etree.cElementTree as etree
import string
import subprocess 
import pickle
import urllib2
import json
import re

blacklist = [
	'User',
	'File:',
	'Board',
	'Image',
	'Template',
	'Talk',
	'Battle',
	'Temple',
	'Wall',
	'castle',
	'Sept',
	'category'
	]
def nonRestricted(string ):
	for word in blacklist:
		if word.lower() in string:
			return False
	return True


namespacestr = '{http://www.mediawiki.org/xml/export-0.6/}'
namespace = {'mw': 'http://www.mediawiki.org/xml/export-0.6/'}

def cleanLink(link):
    
    split = re.split(r'[(|]+', link)
    return split[0].replace(" ", "_")

def findActorsLinks(in_file, Actorsnames):
	actorsLinkDic = {}

	for i , (event, elem) in enumerate(etree.iterparse(in_file, events=('start', 'end', 'start-ns', 'end-ns'))):
		if event == 'end' and elem.tag == namespacestr + 'page':
			title = elem.find('.//mw:title', namespace)
			if title is not None: 
				title = title.text.encode('utf-8')
				if title in Actorsnames:
					textelem = elem.find('.//mw:text', namespace)
					if textelem is not None and textelem.text is not None and nonRestricted(title.lower()):
						lower_wiki_text=textelem.text.encode('utf-8').lower()
						if string.find(lower_wiki_text, "redirect") == -1:
							link_list = []
							for link in re.findall(r'\[\[(.*?)\]\]',lower_wiki_text):
								link_list.append(cleanLink(link))
							actorsLinkDic[title]=link_list
							#print link_list

	return actorsLinkDic

def findChartersLinks(in_file, outfile):
	actorsLinkDic = {}

	for i , (event, elem) in enumerate(etree.iterparse(in_file, events=('start', 'end', 'start-ns', 'end-ns'))):
		if event == 'end' and elem.tag == namespacestr + 'page':
			title = elem.find('.//mw:title', namespace)
			if title is not None: 
				title = title.text.encode('utf-8')
				
				textelem = elem.find('.//mw:text', namespace)
				if textelem is not None and textelem.text is not None and nonRestricted(title.lower()):
					wiki_text=textelem.text.encode('utf-8')
					lower_wiki_text = wiki_text.lower()
					if string.find(lower_wiki_text, "redirect") == -1 and string.find(lower_wiki_text, r'{{character') != -1:
						link_list = []
						for link in re.findall(r'\[\[(.*?)\]\]',wiki_text):
							clink = cleanLink(link)
							link_list.append(clink)
						pattern = re.compile(r'{{Character[\s\S]+?}}', re.IGNORECASE)
						metadata = re.findall(pattern,wiki_text.decode('utf-8'))					
						actorsLinkDic[title]={'links': link_list, 'metadata': metadata}						
						#print link_list
	return actorsLinkDic



#with open('characterLinksDic.json', 'w+') as outfile:
#	ActorLinkDic = findChartersLinks('gameofthrones_pages_current.xml','out')
#	json.dump(ActorLinkDic, outfile)




def getDicofActors():
	baseurl = "http://gameofthrones.wikia.com/wiki/"

	actors_dic = {}

	for page in range(1,5):
		query = "%s%s%s" % (baseurl,'Category:Actor?page=', page)
		data = urllib2.urlopen(query)
		#print data.read()
		links = re.findall(r'<li><a href="/wiki/(.+?)" title="(.+?)"', data.read()) 
		for link_name in links:
			actors_dic[link_name[0]]=link_name[1]
	return actors_dic

