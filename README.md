# Honest

This project was built for HackThe6ix 2021.

Honest provides near instant information to people shopping for consumer goods (ex. food, cosmetics, etc.). The app allows them to simply take a picture of a list of ingredients and display the purpose of those ingredients, as well as flag any that are potential carcinogens identified by the World Health Organization.

The app was built using React and Flask. Wikipedia’s API was used to find information on specific chemicals. A dataset from WHO’s International Agency for Research on Cancer website was also used to determine whether an ingredient is harmful based on its classification. nltk was used to break down each chemical into its root word before searching it in the dataset. xlrd was used to parse the dataset. The Tesseract Optical Character Recognition library was used to recognize the text within an image.
