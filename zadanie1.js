const str = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser();
const xmlDom = parser.parseFromString(str, "text/xml");
const list = xmlDom.querySelector("list");

const students = list.querySelectorAll("student");
let result = {
    list: []
};
students.forEach(
    student => {
        const namestud = student.querySelector("name");
        const firstNameSt = namestud.querySelector("first");
        const secondNameSt = namestud.querySelector("second");
        const langSt = namestud.getAttribute("lang");
        const age = student.querySelector("age");
        const prof = student.querySelector("prof");
        student = { name: `${firstNameSt.textContent} ${secondNameSt.textContent}`, age: age.textContent, prof: prof.textContent, lang: langSt };

        result.list.push(student);

    }
)

console.log(result);
