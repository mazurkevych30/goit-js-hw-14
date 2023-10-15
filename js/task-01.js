

const list = document.querySelector("#categories");
const childrenList = [...list.children];

console.log(`Number of categories: ${childrenList.length}`);

childrenList.forEach((item) => {
    const [title, list] = item.children;
    console.log(" ");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${list.children.length}`);
})