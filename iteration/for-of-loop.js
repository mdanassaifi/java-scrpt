// for of loop

const array = [1, 2, 3, 4, 5]

for (const num of array) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}


//  maps 

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
map.set("key4", "value4");
map.set("key5", "value5");
map.set("key6", "value6");
map.set("key7", "value7");
map.set("key8", "value8");
map.set("key9", "value9");
map.set("key10", "value10");

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myobject = {
    'game': 'cricket',
    'sport': 'cricket',
    'team': 'india',
    'player': 'deepak'
}

for (const [key, value] of Object.entries(myobject)) {
    // console.log(key, ':-', value);
}

const newobj = {
    js: 'javascript',
    html: 'html',
    css: 'css',
    react: 'react',
    node: 'node',
    git: 'git'
}