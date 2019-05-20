let data;
function xhrSyncAJAXcall(url, callback){
  // this is just a demo: NEVER use sunc AJAX calls
  console.log(`xhrAJAXcall start`);
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
            new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(`##########################:\n ${this.responseText}`);
        callback(this.responseText);

    };
  };

  xhr.send();
  return data;
}

function processData(data){
  console.log(`data: ${data}`);
  let userGithubReposUrl = JSON.parse(data).repos_url;
  xhrSyncAJAXcall(userGithubReposUrl, updageUI);
}
function updageUI(data){
  let repos = JSON.parse(data);
  // console.dir(repos);
  repos.forEach(e=>{
    let li = createDOMElement('P', e.full_name);
    li.style.background = 'red';
    output.appendChild(li);
  })
}
function createDOMElement(tagName, content){
  let e = document.createElement(tagName);
  e.innerHTML = content;
  return e;
}

let ghUser = document.querySelector('input[name="ghUser"]');
let ghBtn = document.querySelector('.gh button');
let url = 'https://api.github.com/users/';
let output = document.querySelector('.output');

ghBtn.addEventListener('click', function(){
  url +=ghUser.value;

  
  xhrSyncAJAXcall(url, processData);
  console.log(`data: ${data}`);

})
