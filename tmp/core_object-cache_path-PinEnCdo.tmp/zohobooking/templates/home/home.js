define('zohobooking/templates/home/home', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 1
            },
            "end": {
              "line": 17,
              "column": 1
            }
          },
          "moduleName": "zohobooking/templates/home/home.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","personalTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2,"style","color:#55CEA5;");
          var el3 = dom.createTextNode("Personal");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","transactionTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Transaction");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","booksTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Books");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(fragment, [3]);
          var element9 = dom.childAt(fragment, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element7);
          morphs[1] = dom.createElementMorph(element8);
          morphs[2] = dom.createElementMorph(element9);
          return morphs;
        },
        statements: [
          ["element","action",["changeTab","personalTabSapn","personalDetails"],[],["loc",[null,[8,30],[8,88]]]],
          ["element","action",["changeTab","transactionTabSapn","transactions"],[],["loc",[null,[11,33],[11,91]]]],
          ["element","action",["changeTab","booksTabSapn","allbooks"],[],["loc",[null,[14,27],[14,75]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 1
            },
            "end": {
              "line": 49,
              "column": 1
            }
          },
          "moduleName": "zohobooking/templates/home/home.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","librarianTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2,"style","color:#55CEA5;");
          var el3 = dom.createTextNode("Personal");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","issueBookTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Issue Book");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","allTransTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("All Transactions");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","addBookTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Add Books");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","viewBookTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("View Books");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","addMemberTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Add Member");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"id","viewUserTabSapn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("View Members");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var element2 = dom.childAt(fragment, [6]);
          var element3 = dom.childAt(fragment, [8]);
          var element4 = dom.childAt(fragment, [10]);
          var element5 = dom.childAt(fragment, [12]);
          var element6 = dom.childAt(fragment, [14]);
          var morphs = new Array(7);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createElementMorph(element2);
          morphs[3] = dom.createElementMorph(element3);
          morphs[4] = dom.createElementMorph(element4);
          morphs[5] = dom.createElementMorph(element5);
          morphs[6] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [
          ["element","action",["changeTab","librarianTabSapn","personalDetails"],[],["loc",[null,[18,31],[18,90]]]],
          ["element","action",["changeTab","issueBookTabSapn","issueBook"],[],["loc",[null,[22,31],[22,84]]]],
          ["element","action",["changeTab","allTransTabSapn","allTransactions"],[],["loc",[null,[29,30],[29,88]]]],
          ["element","action",["changeTab","addBookTabSapn","addBook"],[],["loc",[null,[33,29],[33,78]]]],
          ["element","action",["changeTab","viewBookTabSapn","viewBook"],[],["loc",[null,[37,30],[37,81]]]],
          ["element","action",["changeTab","addMemberTabSapn","addMember"],[],["loc",[null,[41,31],[41,84]]]],
          ["element","action",["changeTab","viewUserTabSapn","viewUser"],[],["loc",[null,[45,30],[45,81]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 52,
                "column": 1
              },
              "end": {
                "line": 54,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","user.transaction-details",[],["transactions",["subexpr","@mut",[["get","model",["loc",[null,[53,42],[53,47]]]]],[],[]]],["loc",[null,[53,2],[53,49]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 56,
                "column": 1
              },
              "end": {
                "line": 58,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","user.all-books",[],["books",["subexpr","@mut",[["get","model",["loc",[null,[57,25],[57,30]]]]],[],[]]],["loc",[null,[57,2],[57,32]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 0
            },
            "end": {
              "line": 60,
              "column": 0
            }
          },
          "moduleName": "zohobooking/templates/home/home.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","transactions",["loc",[null,[52,7],[52,19]]]]],[],0,null,["loc",[null,[52,1],[54,8]]]],
          ["block","if",[["get","allbooks",["loc",[null,[56,7],[56,15]]]]],[],1,null,["loc",[null,[56,1],[58,8]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 61,
                "column": 1
              },
              "end": {
                "line": 63,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","librarian.librarian-details",[],["email",["subexpr","@mut",[["get","email",["loc",[null,[62,38],[62,43]]]]],[],[]],"memberUrl",["subexpr","@mut",[["get","memberUrl",["loc",[null,[62,54],[62,63]]]]],[],[]]],["loc",[null,[62,2],[62,65]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 64,
                "column": 1
              },
              "end": {
                "line": 66,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","librarian.add-book",["loc",[null,[65,2],[65,24]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 67,
                "column": 1
              },
              "end": {
                "line": 69,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","librarian.add-member",["loc",[null,[68,2],[68,26]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child3 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 70,
                "column": 1
              },
              "end": {
                "line": 72,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","librarian.view-books",[],["books",["subexpr","@mut",[["get","model",["loc",[null,[71,31],[71,36]]]]],[],[]]],["loc",[null,[71,2],[71,38]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child4 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 73,
                "column": 1
              },
              "end": {
                "line": 75,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","librarian.view-users",[],["users",["subexpr","@mut",[["get","model",["loc",[null,[74,31],[74,36]]]]],[],[]]],["loc",[null,[74,2],[74,38]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child5 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 1
              },
              "end": {
                "line": 78,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","librarian.all-transaction",[],["transactions",["subexpr","@mut",[["get","model",["loc",[null,[77,43],[77,48]]]]],[],[]]],["loc",[null,[77,2],[77,50]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child6 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 79,
                "column": 1
              },
              "end": {
                "line": 81,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","librarian.today-transaction",[],["transactions",["subexpr","@mut",[["get","model",["loc",[null,[80,45],[80,50]]]]],[],[]]],["loc",[null,[80,2],[80,52]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child7 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 82,
                "column": 1
              },
              "end": {
                "line": 84,
                "column": 1
              }
            },
            "moduleName": "zohobooking/templates/home/home.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","librarian.issue-book",[],["members",["subexpr","@mut",[["get","members",["loc",[null,[83,33],[83,40]]]]],[],[]],"books",["subexpr","@mut",[["get","books",["loc",[null,[83,47],[83,52]]]]],[],[]]],["loc",[null,[83,2],[83,54]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 60,
              "column": 0
            },
            "end": {
              "line": 85,
              "column": 0
            }
          },
          "moduleName": "zohobooking/templates/home/home.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(8);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
          morphs[3] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[4] = dom.createMorphAt(fragment,4,4,contextualElement);
          morphs[5] = dom.createMorphAt(fragment,5,5,contextualElement);
          morphs[6] = dom.createMorphAt(fragment,6,6,contextualElement);
          morphs[7] = dom.createMorphAt(fragment,7,7,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","personalDetails",["loc",[null,[61,7],[61,22]]]]],[],0,null,["loc",[null,[61,1],[63,8]]]],
          ["block","if",[["get","addBook",["loc",[null,[64,7],[64,14]]]]],[],1,null,["loc",[null,[64,1],[66,8]]]],
          ["block","if",[["get","addMember",["loc",[null,[67,7],[67,16]]]]],[],2,null,["loc",[null,[67,1],[69,8]]]],
          ["block","if",[["get","viewBook",["loc",[null,[70,7],[70,15]]]]],[],3,null,["loc",[null,[70,1],[72,8]]]],
          ["block","if",[["get","viewUser",["loc",[null,[73,7],[73,15]]]]],[],4,null,["loc",[null,[73,1],[75,8]]]],
          ["block","if",[["get","allTransactions",["loc",[null,[76,7],[76,22]]]]],[],5,null,["loc",[null,[76,1],[78,8]]]],
          ["block","if",[["get","todayTransaction",["loc",[null,[79,7],[79,23]]]]],[],6,null,["loc",[null,[79,1],[81,8]]]],
          ["block","if",[["get","issueBook",["loc",[null,[82,7],[82,16]]]]],[],7,null,["loc",[null,[82,1],[84,8]]]]
        ],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7]
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
            "line": 87,
            "column": 0
          }
        },
        "moduleName": "zohobooking/templates/home/home.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","header");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2,"class","logo");
        var el3 = dom.createTextNode("Zoho LibraryManagement");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","/logoutpage.jsp");
        dom.setAttribute(el2,"class","signout");
        var el3 = dom.createTextNode("Signout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","leftPanel");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createUnsafeMorphAt(dom.childAt(fragment, [0, 3]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        return morphs;
      },
      statements: [
        ["content","email",["loc",[null,[3,5],[3,16]]]],
        ["block","if",[["get","memberrole",["loc",[null,[7,7],[7,17]]]]],[],0,1,["loc",[null,[7,1],[49,8]]]],
        ["block","if",[["get","memberrole",["loc",[null,[51,6],[51,16]]]]],[],2,3,["loc",[null,[51,0],[85,7]]]],
        ["content","outlet",["loc",[null,[86,0],[86,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});