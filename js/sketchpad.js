(function(exports) {
  /* a thing to draw things from natural language */
  var sketchpad = exports.sketchpad = {};

  var svg;

  var setup = function(container) {
    if (!container) {
      container = d3.select(document.body);
    }
    svg = container.append('svg');
  };

  var regex = (function() {
    /* this is gonna get interesting...
       create an object that stores words that could be synonymous with
       the spec'd language that describes svg shapes and styling. this
       is a really basic way of doing it and if you were smart and not lazy
       then you would use a NL library or something and go all-out.
       and i'm only doing 2 shapes for now, deal with it.
    */
    var words = {
      shapes: {
        rect: 'rect', cube: 'rect', box: 'rect', square: 'rect',
        circle: 'circle', oval: 'circle', ellipse: 'circle', // they're not the same thing but i'm lazy hella
      },
      styles: {
        opacity: 'opacity', clear: 'opacity', clearness: 'opacity', transparent: 'opacity',
        stroke: 'stroke', outline: 'stroke'
      },
      attrs: {
        radius: 'r',
        width: 'width', height: 'height', size: 'width' // if you call it a "size" you're getting a square
      },
      sizes: {
        small: 10, medium: 25, big: 60,
        thin: 2, thick: 10
      }
    };
    // construct a regex from all of the above lol
    // and yeah, i'm building a string sue me
    var regexStr = [
      'a|the?\\s?(',
      d3.keys(words.shapes).join('|'), // shapes
      ')\\s',
      // should prob allow as many of these as the user wants instead of this junk
      // but it's almost beer drinky time
      'has\\sa|an (',
      d3.keys(words.styles).concat(d3.keys(words.attrs)).join('|'),
      ') (of|that is) ([\w\d]+)',
      // STOPPING POINT you should start back up here
      ')\\s?and?\\s?',
      'has|is?(',
      d3.keys(words.styles).concat(d3.keys(words.attrs)).join('|'), // lazy
      ')'
    ].join('');
    console.log(regexStr);
    return new RegExp(regexStr, 'i');
  })();

  var parser = function(sentence) {
    //
  };

})(this);
