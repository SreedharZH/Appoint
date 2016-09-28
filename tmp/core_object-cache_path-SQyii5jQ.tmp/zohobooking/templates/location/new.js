define('zohobooking/templates/location/new', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
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
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "zohobooking/templates/location/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"id","location_form");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"border","1");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createElement("th");
        var el4 = dom.createTextNode("Email");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createElement("td");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(11);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0,1,1);
        morphs[2] = dom.createMorphAt(element0,3,3);
        morphs[3] = dom.createMorphAt(element0,5,5);
        morphs[4] = dom.createMorphAt(element0,7,7);
        morphs[5] = dom.createMorphAt(element0,9,9);
        morphs[6] = dom.createMorphAt(element0,11,11);
        morphs[7] = dom.createMorphAt(element0,13,13);
        morphs[8] = dom.createMorphAt(element0,15,15);
        morphs[9] = dom.createMorphAt(dom.childAt(fragment, [5, 3, 0]),0,0);
        morphs[10] = dom.createMorphAt(fragment,7,7,contextualElement);
        return morphs;
      },
      statements: [
        ["element","action",["add"],["on","submit"],["loc",[null,[1,25],[1,53]]]],
        ["inline","input",[],["placeholder","Location Name","value",["subexpr","@mut",[["get","Email",["loc",[null,[2,42],[2,47]]]]],[],[]]],["loc",[null,[2,0],[2,49]]]],
        ["inline","input",[],["placeholder","Address Line 1","value",["subexpr","@mut",[["get","Address_Line_1",["loc",[null,[3,43],[3,57]]]]],[],[]]],["loc",[null,[3,0],[3,59]]]],
        ["inline","input",[],["placeholder","Address Line 2","value",["subexpr","@mut",[["get","address_line_2",["loc",[null,[4,43],[4,57]]]]],[],[]]],["loc",[null,[4,0],[4,59]]]],
        ["inline","input",[],["placeholder","Country","value",["subexpr","@mut",[["get","country",["loc",[null,[5,36],[5,43]]]]],[],[]]],["loc",[null,[5,0],[5,45]]]],
        ["inline","input",[],["placeholder","State","value",["subexpr","@mut",[["get","state",["loc",[null,[6,34],[6,39]]]]],[],[]]],["loc",[null,[6,0],[6,41]]]],
        ["inline","input",[],["placeholder","City","value",["subexpr","@mut",[["get","city",["loc",[null,[7,33],[7,37]]]]],[],[]]],["loc",[null,[7,0],[7,39]]]],
        ["inline","input",[],["placeholder","Pincode","value",["subexpr","@mut",[["get","pincode",["loc",[null,[8,36],[8,43]]]]],[],[]]],["loc",[null,[8,0],[8,45]]]],
        ["inline","input",[],["type","submit","value","Add Location"],["loc",[null,[9,0],[9,44]]]],
        ["content","location.Email",["loc",[null,[15,9],[15,27]]]],
        ["content","outlet",["loc",[null,[17,0],[17,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});