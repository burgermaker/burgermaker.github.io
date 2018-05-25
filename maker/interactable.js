let transformProp;

interact.maxInteractions(Infinity);

// setup draggable elements.
interact('.js-drag')
  .draggable({
    max: Infinity,
    snap: {
      relativePoints: [{ x: 0.5, y: 0.5 }],
    },
  })
  .on('dragstart', function (event) {
    event.interaction.x = parseInt(event.target.getAttribute('data-x'), 10) || 0;
    event.interaction.y = parseInt(event.target.getAttribute('data-y'), 10) || 0;
  })
  .on('dragmove', function (event) {
    event.interaction.x += event.dx;
    event.interaction.y += event.dy;

    if (transformProp) {
      event.target.style[transformProp] =
        'translate(' + event.interaction.x + 'px, ' + event.interaction.y + 'px)';
    }
    else {
      event.target.style.left = event.interaction.x + 'px';
      event.target.style.top  = event.interaction.y + 'px';
    }
  })
  .on('dragend', function (event) {
    event.target.setAttribute('data-x', event.interaction.x);
    event.target.setAttribute('data-y', event.interaction.y);
  });

setupDropzone('.js-drop');

function setupDropzone (el, accept) {
  interact(el)
    .dropzone({
      accept: accept,
      ondropactivate: function (event) {
        addClass(event.relatedTarget, '-drop-possible');
      },
      ondropdeactivate: function (event) {
        removeClass(event.relatedTarget, '-drop-possible');
      },
    })
    .on('dropactivate', function (event) {
      const active = event.target.getAttribute('active')|0;
      event.target.setAttribute('active', active + 1);
    })
    .on('dropdeactivate', function (event) {
      const active = event.target.getAttribute('active')|0;
      event.target.setAttribute('active', active - 1);
    })
    .on('dragenter', function (event) {
      addClass(event.target, '-drop-over');
    })
    .on('dragleave', function (event) {
      removeClass(event.target, '-drop-over');
    })
    .on('drop', function (event) {
      removeClass(event.target, '-drop-over');
      event.target.innerHTML = event.relatedTarget.innerHTML.toString();
      /*
      var link = event.relatedTarget.children[0].getAttribute("src").toString();
      var nt = document.querySelectorAll("div > img[src=\"" + link + "\"]");
      document.getElementById("ingredientlist").innerHTML = nt[0].outerHTML + document.getElementById("ingredientlist").innerHTML.toString();
      nt[0].parentNode.remove(nt[0]);
      nt[0].parentNode.remove(nt[0]);
      */
    });
}

function addClass (element, className) {
  if (element.classList) {
    return element.classList.add(className);
  }
  else {
    element.className += ' ' + className;
  }
}

function removeClass (element, className) {
  if (element.classList) {
    return element.classList.remove(className);
  }
  else {
    element.className = element.className.replace(new RegExp(className + ' *', 'g'), '');
  }
}

interact(document).on('ready', function () {
  transformProp = 'transform' in document.body.style
    ? 'transform': 'webkitTransform' in document.body.style
      ? 'webkitTransform': 'mozTransform' in document.body.style
        ? 'mozTransform': 'oTransform' in document.body.style
          ? 'oTransform': 'msTransform' in document.body.style
            ? 'msTransform': null;
});
