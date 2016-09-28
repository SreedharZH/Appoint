define('zohobooking/templates/student/add', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "zohobooking/templates/student/add.hbs"
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
          ["attribute","value",["get","stuSemaster.id",["loc",[null,[15,20],[15,34]]]]],
          ["content","stuSemaster.Marks",["loc",[null,[15,37],[15,58]]]]
        ],
        locals: ["stuSemaster"],
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
            "line": 22,
            "column": 10
          }
        },
        "moduleName": "zohobooking/templates/student/add.hbs"
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
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2,"value","Department");
        dom.setAttribute(el2,"id","departmentSelect");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3,"value","IT");
        var el4 = dom.createTextNode("IT");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3,"value","CSE");
        var el4 = dom.createTextNode("CSE");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3,"value","ECE");
        var el4 = dom.createTextNode("ECE");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2,"value","Batch");
        dom.setAttribute(el2,"id","batchSelect");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3,"value","2009");
        var el4 = dom.createTextNode("2009");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3,"value","2010");
        var el4 = dom.createTextNode("2010");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3,"value","2011");
        var el4 = dom.createTextNode("2011");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2,"multiple","");
        dom.setAttribute(el2,"value","Marks");
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
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode(" Update ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode(" Delete ");
        dom.appendChild(el2, el3);
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
        var element2 = dom.childAt(element1, [7]);
        var element3 = dom.childAt(element1, [11]);
        var element4 = dom.childAt(element1, [13]);
        var morphs = new Array(8);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createAttrMorph(element2, 'onchange');
        morphs[3] = dom.createMorphAt(element2,1,1);
        morphs[4] = dom.createMorphAt(element1,9,9);
        morphs[5] = dom.createElementMorph(element3);
        morphs[6] = dom.createElementMorph(element4);
        morphs[7] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["element","action",["addStudent"],["on","submit"],["loc",[null,[1,25],[1,60]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","name",["loc",[null,[2,27],[2,31]]]]],[],[]]],["loc",[null,[2,1],[2,33]]]],
        ["attribute","onchange",["subexpr","action",["selectBand"],[],["loc",[null,[13,39],[13,62]]]]],
        ["block","each",[["get","model",["loc",[null,[14,10],[14,15]]]]],[],0,null,["loc",[null,[14,2],[16,11]]]],
        ["inline","input",[],["type","submit","value","Submit"],["loc",[null,[18,1],[18,39]]]],
        ["element","action",["updateRec"],[],["loc",[null,[19,9],[19,31]]]],
        ["element","action",["deleteRec"],[],["loc",[null,[20,9],[20,31]]]],
        ["content","outlet",["loc",[null,[22,0],[22,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});