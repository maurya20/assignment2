str = "i like sam sung samsung mobile ice cream icecream man go mango"
dict = str.split()                                 # Making a list of stored dicttionary words.
input_string = input("Enter your string:")         # Taking a string input from user.

out = []                                           # An empty list.
for x in dict:                                     # Looping in the stored dicttionary words.
    if (input_string.find(x) == -1):
        pass                                       # If it is not found in input string, do nothing.
    else:
        out.append(x)                              # If it is found in input string, append it in out = [] list.
if not out:
    print("Input not found in dictionary.")        # If out is empty print this.
else:
    print("Yes, the string can be segmented as-")  # If out is not empty  print this.
    foundstr = ' '.join(out)                       # Converting out list in a space segmented string.
    print(foundstr)                                # printing space segmented string.
     

 



