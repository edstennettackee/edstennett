// Helpers

function qs(el) {
    return document.querySelector(el);
}

function qsa(el) {
    return document.querySelectorAll(el);
}

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

// Copy to Clipboard functionality
const copyToClipboard = element => {
    var el = document.createElement('textarea');
    var text = qs(element).innerText
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    var copied = qs(element + '_copied');
    if (copied) {
        copied.classList.add("show");
        setTimeout(function(){ copied.classList.remove("show"); }, 2000);
    }
}

// Resources
function resourceNavigator(id, resources, container, start, end) {

    var jump = end;
    var starter = start;
    var ender = end;
    var totalnumber = resources.length;
    
    showResources(resources, container, start, end);

    var next = document.getElementById(id).nextElementSibling.children[0];
    var back = document.getElementById(id).nextElementSibling.children[1];

    resourceNavigatorVisibility(next, back, starter, jump, totalnumber);
    
    next.addEventListener("click", function() {
        starter = starter + jump <= totalnumber - jump ? starter + jump : Math.max(0,totalnumber - jump);
        ender = starter + jump; 
        resourceNavigatorVisibility(next, back, starter, jump, totalnumber)
        showResources(resources, container, starter, ender);
    });
    
    document.getElementById(id).nextElementSibling.children[1].addEventListener("click", function() {
        starter = starter - jump > 0 ? starter - jump : 0;
        ender = starter + jump;
        resourceNavigatorVisibility(next, back, starter, jump, totalnumber)
        showResources(resources, container, starter, ender);
    });
    
}

function resourceNavigatorVisibility(next, back, starter, jump, totalnumber) {
    next.style.cursor = starter + jump <= totalnumber - jump ? "pointer" : "default";
    next.style.opacity = starter + jump <= totalnumber - jump ? 1 : 0.4;
    back.style.cursor = starter - jump >= 0 ? "pointer" : "default";
    back.style.opacity = starter - jump >= 0 ? 1 : 0.4;
}

/* Function to show Resources */
function showResources(resources, container, start, numberToShow) {
    if (resources.length) { 
        var appendString = '';
        for (var i = start; i < numberToShow; i++) { 
            var item = resources[i];
            if (item == undefined) {
                break;
            }
            appendString += item.resource;
        }
        container.innerHTML = appendString;
    }
}
  
ready(() => { 
    // Toggles
    var toggles = qsa('[data-toggle]')
    toggles.forEach(function (toggle) {
        var name = toggle.dataset.toggle
        var checked = false;
        var check_visible = qsa('[data-toggle-checked="' + name + '"]');
        var uncheck_visible = qsa('[data-toggle-unchecked="' + name + '"]');

        toggle.addEventListener("click", function() {
            toggle.classList.toggle('toggle-checked');
            checked = !checked;

            if (checked) {
                check_visible.forEach(x => x.style.display = 'block');
                uncheck_visible.forEach(x => x.style.display = 'none');
            } else {
                check_visible.forEach(x => x.style.display = 'none');
                uncheck_visible.forEach(x => x.style.display = 'block');
            }
        })
    })

    // Tabs 
    var tabsSections = qsa('[data-tabbed]');
    tabsSections.forEach(function (tab) {
        var tabLinks = tab.querySelectorAll(".tabLink");
        var tabContents = tab.querySelectorAll(".tabContent");
        tabLinks.forEach(function(tablink) {
            tablink.addEventListener("click", function() {
                this.parentElement.scrollLeft = this.offsetLeft - 24;
                tabLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                tabContents.forEach(function(content) {
                    content.classList.remove('showing');
                })
                this.classList.add('active');
                var index = Array.prototype.slice.call(tabLinks).indexOf(this);
                tabContents[index].classList.add('showing');
            });
        })
    });
});

ready(() => {

    qs(".mobile-menu").addEventListener("click", function() {
        this.classList.toggle("active");
        qs("nav").classList.toggle("active");
    });
    
    function toggler(item) {
        for (var i = 0; i < item.length; i++) {
            item[i].nextElementSibling.classList.add("hidden");
            
            item[i].addEventListener("click", function() {
                getSiblings(this.parentNode).forEach((item) => item.classList.toggle("hidden"));
                if (this.parentNode.classList.contains("pair")) {
                    this.classList.toggle("active-toggle");
                    this.nextElementSibling.classList.toggle("hidden");   
                    this.parentNode.nextElementSibling.children[0].classList.toggle("active-toggle");
                    this.parentNode.nextElementSibling.children[1].classList.toggle("hidden");
                } else {
                    this.classList.toggle("active-toggle");
                    this.nextElementSibling.classList.toggle("hidden");   
                }
            });
        }
    }
    
    var mobileOption = qsa("p.header-link");
    var mobileSubOption = qsa(".submenu .col-heading");

    toggler(mobileOption);
    toggler(mobileSubOption);
    
});
