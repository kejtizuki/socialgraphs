import json
import re
import FunctionLib as FB
import networkx as nx
file = open('actors.txt','r')

with open('characterLinksDic.json', 'r') as outfile:
	characterLinksDic = json.load(outfile)


G = nx.DiGraph()

key_links = set()
for key in characterLinksDic:
	key_to_link = key.replace(" ", "_")
	key_links.add(key_to_link)
	G.add_node(key_to_link)

for key, value in characterLinksDic.iteritems():
	for link in value['links']:
		if link in key_links:
			key_to_link = key.replace(" ", "_")
			G.add_edge(key_to_link,link)

for node in G.nodes_iter():
	if G.out_degree(node) == 0:
		print node
