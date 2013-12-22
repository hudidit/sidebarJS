/*
    sidebar.js
    created by Yue Hu (http://hudidit.com).
    Date: 2013-12-22
    
    user guide on github: https://github.com/hudidit/sidebarJS
    
    under MIT License.
*/

;(function sidebar(){
    
    var doc = document,
        nav = doc.querySelector('.sidebar-nav'),
        layer = createLayer();
        
    // append layer, hide by default
    doc.body.appendChild( layer ); 
    
    // add close buttons into sidebar
    nav.insertBefore( createCloseBtn(), nav.childNodes[0] );
    
    // bind click event to the sidebar-btn on the page
    bindClickEvent.call( doc.querySelector('.sidebar-btn') );
    
    // prevent transition when nav just get in page
    window.setTimeout(function(){
        addClass( nav, 'sidebar-ready' );
    },500);
    
    // create a layer over page, for users to click/tap on it to hide sidebar
    function createLayer(){
        var layer = doc.createElement('div');
        addClass( layer, 'sidebar-layer' );
        bindClickEvent.call( layer );
        return layer;
    }
    // create and insert a 'X' close button in sidebar
    function createCloseBtn(){
        var btnInNav = doc.createElement('a');
        btnInNav.href = '#';
        btnInNav.innerHTML = 'X';
        addClass( btnInNav, 'sidebar-btn-in-nav' );
        bindClickEvent.call( btnInNav );    // bind click event to the 'X' button in sidebar
        return btnInNav;
    }
    // click btn, toggle sidebar & layer
    function bindClickEvent(){
        bind( this, 'click', function(e){
            e.preventDefault();
            toggle();
        }, false );
    }
    // toggle sidebar & layer
    function toggle(){
        toggleClass( nav, 'sidebar-show' );
        toggleClass( layer, 'sidebar-layer-show' );
    }
    
    
    // -------------- 工具函数 --------------
    function bind( ele, evt, func, cap ){
         cap = cap||false;
        if(ele.addEventListener){
            ele.addEventListener(evt,func,cap);
        }else if(ele.attachEvent){
            ele.attachEvent('on'+evt,func);
        }
    }
    function hasClass(ele,cls){
		return (' '+ele.className+' ').indexOf(' '+cls+' ') > -1;
	}
	function addClass(ele,cls){
		if(hasClass(ele,cls)){
			return;
		}else{
			ele.setAttribute('class',ele.className+' '+cls);
		}
	}
	function removeClass(ele,cls){
		if(!hasClass(ele,cls)){
			return;
		}else{
			var classes = ele.className;
			classes = classes.replace(cls,'');
			ele.setAttribute('class',classes);
		}
	}
    function toggleClass( el, cls ){
        ( hasClass( el, cls ) ) ? ( removeClass( el, cls ) ) : ( addClass( el, cls ) );
    }
    
    function log( a ){
        console.log( a );
    }
    
})();