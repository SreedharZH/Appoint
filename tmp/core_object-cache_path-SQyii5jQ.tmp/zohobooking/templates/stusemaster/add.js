define('zohobooking/templates/stusemaster/add', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 3
            },
            "end": {
              "line": 5,
              "column": 3
            }
          },
          "moduleName": "zohobooking/templates/stusemaster/add.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
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
          ["attribute","value",["get","student.id",["loc",[null,[4,20],[4,30]]]]],
          ["content","student.StudentName",["loc",[null,[4,33],[4,56]]]]
        ],
        locals: ["student"],
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
            "line": 11,
            "column": 10
          }
        },
        "moduleName": "zohobooking/templates/stusemaster/add.hbs"
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
        var el2 = dom.createElement("select");
        dom.setAttribute(el2,"value","student");
        dom.setAttribute(el2,"id","studentSelect");
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
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
        var morphs = new Array(6);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
        morphs[2] = dom.createMorphAt(element1,3,3);
        morphs[3] = dom.createMorphAt(element1,5,5);
        morphs[4] = dom.createMorphAt(element1,7,7);
        morphs[5] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["element","action",["addStusemaster"],["on","submit"],["loc",[null,[1,25],[1,64]]]],
        ["block","each",[["get","model",["loc",[null,[3,11],[3,16]]]]],[],0,null,["loc",[null,[3,3],[5,12]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","semaster",["loc",[null,[7,27],[7,35]]]]],[],[]]],["loc",[null,[7,1],[7,37]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","marks",["loc",[null,[8,27],[8,32]]]]],[],[]]],["loc",[null,[8,1],[8,34]]]],
        ["inline","input",[],["type","submit","value","Submit"],["loc",[null,[9,1],[9,39]]]],
        ["content","outlet",["loc",[null,[11,0],[11,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});