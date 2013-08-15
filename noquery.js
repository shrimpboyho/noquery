/* noQuery*/

(function() {

  function n$( selector, context ) {
    context = context || document;

    return {

      all: function() {
        var list, ary = [];
        list = context.querySelectorAll( selector );
        for ( var i = 0; i < list.length; i++ ) {
          ary[ i ] = list[ i ];
        }
        return ary;
      },

      first: function() {
        return context.querySelector( selector );
      },

      last: function() {
        var list = context.querySelectorAll( selector );
        return list.length > 0 ? list[ list.length - 1 ] : null;
      }

    };

  }

}());
