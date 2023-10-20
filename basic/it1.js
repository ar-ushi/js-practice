const hacker1 = 'someguy';
//console.log (`The driver's name is ${hacker1}`);
const nav1 = 'someguy';
//console.log (`${nav1}`);

//conditionals

function isLonger(n1, n2) {
    const longestName = n1 > n2 ? n1 : n2;
    return n1.length == n2.length ? `Same length` : `The ${longestName == n1 ? 'driver' :'navigator' } has the longest name, it has ${longestName.length} characters`
}

//console.log(isLonger(hacker1, nav1))

//loops

function printNameJS(n1) {
    return n1.split('').join(' ').replace(/\b\w/g, l=>l.toUpperCase())
}

function printNameNative(n1){
    var x = '';
    for (let i = 0; i<n1.length; i++){
        x += n1[i].replace(/\b\w/, l=> l.toUpperCase()) + " " ;
    }
    return x;
}


function reverseNameJs(n1) {
    return n1.split('').reverse().join('');
}

function reverseNameNative(n1) {
    var x = '';
    for (let i = 0; i<n1.length; i++){
        x = n1[i] +x;
    }
    return x
}

//console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', reverseNameNative(hacker1));

function compLexOrder(n1,n2){
    if (n1.length == n2.length){
        for (let i =0; i<n1.length; i++){
            if (n1[i] == n2[i] &&  n1.charCodeAt(i) > n2.charCodeAt(i) || n1[i] < n2[i] ) {
                return n1;
            }else {return n2};
    }
}
    return n1.length > n2.length ? n2 : n1;
}

//console.log(compLexOrder('Apple', 'apple'))

function countWordsJS(n1){
    x = n1.split(' ');
    return `${x.length} & ${x.reduce((count, x) => (x.toLowerCase() == 'et' ? count++ : count),0)}`;
}

function countWordsNative(n1) {
    count = 1;
    etct = 0;
    for (let i=0; i<n1.length; i++){
        count = n1[i+1] == ' '? count+1 : count;
        etct = (n1[i] == 'e' || n1[i] == 'E') && n1[i+1] == 't' ? etct+1 : etct; 
    }
    return `${count} & ${etct}`;
}

var longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nisi id cursus laoreet. Aliquam fringilla augue arcu, ut euismod lectus ultricies vel. Nulla varius lacus vel accumsan porta. Integer ipsum leo, viverra ullamcorper finibus eu, pellentesque at tellus. Etiam interdum ante non justo venenatis volutpat. Quisque blandit ac dolor tempor ornare. Etiam placerat sit amet nunc eget porta. Nullam scelerisque enim rutrum mi sollicitudin, eget tincidunt augue facilisis. Proin elementum sollicitudin nisl, eu rhoncus orci maximus id. Curabitur vel congue odio.\br Vestibulum vehicula faucibus facilisis. Suspendisse pulvinar dui id nunc lacinia rhoncus. Sed tempus finibus convallis. Suspendisse potenti. Pellentesque fermentum, tellus in porta posuere, dui erat tempor nisl, sed lacinia purus elit sit amet augue. Vestibulum vel blandit neque. Nunc eu luctus nisl, ut vehicula est. Duis pulvinar sem ac tristique lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\br Duis velit dolor, convallis a risus nec, vehicula varius velit. Proin finibus velit lectus, id luctus libero fringilla blandit. Donec vitae eros in libero fermentum finibus in sed justo. Cras a ex libero. Fusce sed justo at velit condimentum vestibulum ac ac augue. Aliquam non felis vel odio auctor fringilla ultrices id felis. Curabitur eros lorem, varius ac nisl sit amet, elementum vulputate nisl. Nulla molestie felis imperdiet, fermentum orci id, hendrerit justo. Vivamus quis est ac urna facilisis volutpat. Mauris volutpat nec felis fermentum tincidunt. Maecenas in facilisis dui."

var t0=performance.now()
console.log(countWordsJS(longtext))
var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
