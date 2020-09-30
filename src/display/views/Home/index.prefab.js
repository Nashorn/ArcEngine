
                
namespace `display.views` (
    @tag("home-page");
	class Home extends WebComponent  {
		
	}
)


                display.views.Home.prototype.template = function(){
                    return `<template>
	<div>
		<h1>Home Page</h1>
	</div>
</template>
`
                };

                display.views.Home.prototype.cssStyle = function(){
                    return `/*
    :host is the root element itself.
    Example, the <home-page></home-page> tag.
*/

:host {
	
}

:host h1 {
    color:red;
}
`
                };

                display.views.Home.prototype.onLoadInstanceStylesheet = function(){ return false }
