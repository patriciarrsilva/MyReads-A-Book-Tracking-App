(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(15),c=a.n(r),s=a(34),l=(a(23),a(6)),i=a(7),u=a(9),m=a(8),h=a(10),d=a(35),k=a(13),f="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:b},p=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(k.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(k.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=a(33),N=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.currentShelf,o=e.shelfMoveBook,r=t.imageLinks?t.imageLinks.thumbnail:"http://via.placeholder.com/128x193?text=N/A";return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(r,'")')}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:a,onChange:function(e){return o(t,e.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors))}}]),t}(o.Component);var g=function(e){return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},e.books.filter(function(e){return"currentlyReading"===e.shelf}).map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(N,{book:t,shelfMoveBook:e.onMoveBook,currentShelf:t.shelf}))})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},e.books.filter(function(e){return"wantToRead"===e.shelf}).map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(N,{book:t,shelfMoveBook:e.onMoveBook,currentShelf:t.shelf}))})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},e.books.filter(function(e){return"read"===e.shelf}).map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(N,{book:t,shelfMoveBook:e.onMoveBook,currentShelf:t.shelf}))})))))),n.a.createElement("div",{className:"open-search"},n.a.createElement(y.a,{to:"/search"},"Add a book")))},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={query:"",searchedBooks:[]},a.updateQuery=function(e){a.setState({query:e}),a.updateSearch(e)},a.updateSearch=function(e){e?E(e).then(function(e){e.error?a.setState({searchedBooks:[]}):a.setState({searchedBooks:e})}):a.setState({searchedBooks:[]})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.books,o=t.onMoveBook,r=this.state,c=r.query,s=r.searchedBooks;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(y.a,{className:"close-search",to:"/"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:c,onChange:function(t){return e.updateQuery(t.target.value)}}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},s.map(function(e){var t="none";return a.map(function(a){return a.id===e.id&&(t=a.shelf)}),n.a.createElement("li",{key:e.id},n.a.createElement(N,{book:e,shelfMoveBook:o,currentShelf:t}))}))))}}]),t}(o.Component),B=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={books:[]},a.moveBook=function(e,t){p(e,t).then(function(){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat(e)}})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state.books;return n.a.createElement("div",{className:"app"},n.a.createElement(d.a,{exact:!0,path:"/",render:function(){return n.a.createElement(g,{books:t,onMoveBook:e.moveBook})}}),n.a.createElement(d.a,{path:"/search",render:function(){return n.a.createElement(j,{books:t,onMoveBook:e.moveBook})}}))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(s.a,{basename:"/MyReads-A-Book-Tracking-App"},n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.ee339f68.chunk.js.map