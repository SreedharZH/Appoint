define('zohobooking/templates/projects/add', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "zohobooking/templates/projects/add.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","value",["get","user.id",["loc",[null,[5,19],[5,26]]]]],
          ["content","user.Name",["loc",[null,[5,29],[5,42]]]]
        ],
        locals: ["user"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 10
          }
        },
        "moduleName": "zohobooking/templates/projects/add.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"id","location_form");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2,"multiple","");
        dom.setAttribute(el2,"value","users");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode(" Update ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode(" Delete ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [5]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(fragment, [4]);
        var morphs = new Array(8);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createAttrMorph(element2, 'onchange');
        morphs[3] = dom.createMorphAt(element2,1,1);
        morphs[4] = dom.createMorphAt(element1,7,7);
        morphs[5] = dom.createElementMorph(element3);
        morphs[6] = dom.createElementMorph(element4);
        morphs[7] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["element","action",["addProject"],["on","submit"],["loc",[null,[1,25],[1,60]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","Name",["loc",[null,[2,27],[2,31]]]]],[],[]]],["loc",[null,[2,1],[2,33]]]],
        ["attribute","onchange",["subexpr","action",["selectBand"],[],["loc",[null,[3,39],[3,62]]]]],
        ["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],0,null,["loc",[null,[4,2],[6,11]]]],
        ["inline","input",[],["type","submit","value","Submit"],["loc",[null,[8,1],[8,39]]]],
        ["element","action",["updateRec"],[],["loc",[null,[11,8],[11,30]]]],
        ["element","action",["deleteRec"],[],["loc",[null,[12,8],[12,30]]]],
        ["content","outlet",["loc",[null,[13,0],[13,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});