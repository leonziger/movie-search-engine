(this["webpackJsonpreact-movies-search-engine"]=this["webpackJsonpreact-movies-search-engine"]||[]).push([[0],{19:function(e,a,t){e.exports=t(49)},24:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(16),c=t.n(s),i=(t(24),t(6)),o=t.n(i),u=t(17),l=t(2),p=t(3),v=t(5),m=t(4),g=(t(26),t(27),t(28),t(29),function(e){Object(v.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar"},r.a.createElement("span",{className:"navbar-title"},"Pages:")," ",this.props.pages.map((function(a){return r.a.createElement("div",{className:"navbar-page",key:a,onClick:e.props.changePage},a)}))),r.a.createElement("div",{className:"navbar-buttons"},r.a.createElement("button",{className:"navbar-button prev-button",onClick:this.props.updatePrevPagesRange},"Prev 10 pages"),r.a.createElement("button",{className:"navbar-button next-button",onClick:this.props.updateNextPagesRange},"Next 10 pages")))}}]),t}(r.a.Component)),d=function(e){Object(v.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-title"},"Movie Search Engine"),r.a.createElement(g,{pages:this.props.pages,changePage:this.props.changePage,updatePrevPagesRange:this.props.updatePrevPagesRange,updateNextPagesRange:this.props.updateNextPagesRange})))}}]),t}(r.a.Component);t(30);var h=function(e){return r.a.createElement("div",{className:"col-md-4 col-sm-6 card"},r.a.createElement("img",{className:"card-img-top",alt:"",src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(e.movie.backdrop_path||e.movie.poster_path)}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},e.movie.title),r.a.createElement("div",{className:"card-overview"},e.movie.overview)))},f=function(e){Object(v.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.props.movies.map((function(e){return r.a.createElement(h,{key:e.id,movie:e})}))))}}]),t}(r.a.Component);t(31);var b=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container footer-copy"},"Movie Search Engine. Copyright 2020."))},E=t(18),P=t.n(E),N=function(e){Object(v.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).changePage=function(a){a.preventDefault();var t=a.target,n=document.querySelector(".navbar-page_active");t&&(n&&n.classList.remove("navbar-page_active"),t.classList.add("navbar-page_active"));var r=Number(t.innerText);e.fetchMovies(r),e.setState({startPage:r})},e.updatePrevPagesRange=function(){if(e.state.pages[0]>1){var a=e.state.pages.map((function(e){return e-10}));e.fetchMovies(a[0]),e.setState({pages:a})}},e.updateNextPagesRange=function(){var a=e.state.pages.map((function(e){return e+10}));e.fetchMovies(a[0]),e.setState({pages:a})},e.state={startPage:1,pages:[1,2,3,4,5,6,7,8,9,10],movies:[]},e}return Object(p.a)(t,[{key:"fetchMovies",value:function(){var e=Object(u.a)(o.a.mark((function e(a){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:"ee0f05a0f4bb56e4353f24db8f4f30ef",language:"ru-RU",sort_by:"popularity.desc",include_adult:"false",include_video:"false",page:a}}).then((function(e){return e.data.results})).catch((function(e){return n.setState({error:!0})}));case 2:t=e.sent,this.setState({movies:t});case 4:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchMovies(this.state.startPage)}},{key:"render",value:function(){var e=this.state.error?r.a.createElement("p",{className:"App-error"},"Movies can't be loaded on this page"):"Loading...";return r.a.createElement("div",null,r.a.createElement(d,{pages:this.state.pages,changePage:this.changePage,updatePrevPagesRange:this.updatePrevPagesRange,updateNextPagesRange:this.updateNextPagesRange}),this.state.movies?r.a.createElement(f,{movies:this.state.movies}):e,r.a.createElement(b,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.3f1cb416.chunk.js.map