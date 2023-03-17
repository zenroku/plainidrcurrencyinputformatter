# Plain HTML + JS IDR dot thousand separator input

for who are struggling to implement plain html input can handle thousand separator, especially if you are work on an indonesian company for inputing money value in your input for their project who hasn't any component library framework for your project, just simply copy and paste the script! i hope you leave the star if you feel this repo is helping you

**example :**

- user input just number like "100000,002"
- it will generate input value "100.000,002"

**features**

- it will remove all aplhabets and unnecessarry characters, just read number and commas
- just plain javascript and html only, no need to install another libs

**demo**
demo? just clone or copy whole project or copy the script and open the index.html file

**how to use**

- dont forget to inject javascript to your html
- the input atrribute of **name** and **id** is must the same, try to make it unique
- pass the function of **thousandSep(id)** and pass the string of your **id** on attribute **onkeypress** like on the example of _index.html_ file
