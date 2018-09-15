function themeSwitcher(themeName){
    alert("themeSwitcher ON");
    document.getElementById('theme').setAttribute('href','/ProgressBG-Python-WebDev/lib/reveal.js/css/theme/'+themeName+'.css');
}

function  PrettyPreCodeTmp(){
    var codeNodes = document.querySelectorAll('pre>code');

    for (var i = 0; i < codeNodes.length; i++)
    {
        var content = codeNodes[i].innerHTML;

        // get indent
        var indent =  content.match(/^\n*(\s*)/)[1];

        // remove indent from all lines
        var indentRE = new RegExp("^" + indent, "gm");
        content = content.replace(indentRE, "");

        // clean empty lines on start/end
        content = content.replace(/^\s*/,"");
        content = content.replace(/\s*$/, "");

        codeNodes[i].innerHTML = content;
        codeNodes[i].style.overflow="auto";
    }
}

function  PrettyPreCode(){
    var codeNodes = document.querySelectorAll('pre>code');
    // console.dir(codeNodes);

    for (var i = 0; i < codeNodes.length; i++)
    {
        var content = codeNodes[i].innerHTML;

        // get indent
        var indent =  content.match(/^\n*(\s*)/)[1];

        // remove indent from all lines
        var indentRE = new RegExp("^" + indent, "gm");
        content = content.replace(indentRE, "");

        // clean empty lines on start/end
        content = content.replace(/^\s*/,"");
        content = content.replace(/\s*$/, "");

        codeNodes[i].innerHTML = content;
        codeNodes[i].style.overflow="auto";
    }
}

function autoTitleLinksWrapImages(){
    var imgs = document.querySelectorAll('.reveal section a>img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].parentElement.setAttribute("title", "click for bigger image")
    }
}


PrettyPreCode();
autoTitleLinksWrapImages();

