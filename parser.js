/* parser generated by jison 0.4.11 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var bnf = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"spec":3,"declaration_list":4,"%%":5,"grammar":6,"optional_end_block":7,"EOF":8,"CODE":9,"declaration":10,"START":11,"id":12,"LEX_BLOCK":13,"operator":14,"ACTION":15,"parse_param":16,"options":17,"UNKNOWN_DECL":18,"OPTIONS":19,"token_list":20,"PARSE_PARAM":21,"associativity":22,"LEFT":23,"RIGHT":24,"NONASSOC":25,"symbol":26,"production_list":27,"production":28,":":29,"handle_list":30,";":31,"|":32,"handle_action":33,"handle":34,"prec":35,"action":36,"expression_suffix":37,"handle_sublist":38,"expression":39,"suffix":40,"ALIAS":41,"ID":42,"STRING":43,"(":44,")":45,"*":46,"?":47,"+":48,"PREC":49,"{":50,"action_body":51,"}":52,"ARROW_ACTION":53,"action_comments_body":54,"ACTION_BODY":55,"$accept":0,"$end":1},
terminals_: {2:"error",5:"%%",8:"EOF",9:"CODE",11:"START",13:"LEX_BLOCK",15:"ACTION",18:"UNKNOWN_DECL",19:"OPTIONS",21:"PARSE_PARAM",23:"LEFT",24:"RIGHT",25:"NONASSOC",29:":",31:";",32:"|",41:"ALIAS",42:"ID",43:"STRING",44:"(",45:")",46:"*",47:"?",48:"+",49:"PREC",50:"{",52:"}",53:"ARROW_ACTION",55:"ACTION_BODY"},
productions_: [0,[3,5],[3,6],[7,0],[7,1],[4,2],[4,0],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[17,2],[16,2],[14,2],[22,1],[22,1],[22,1],[20,2],[20,1],[6,1],[27,2],[27,1],[28,4],[30,3],[30,1],[33,3],[34,2],[34,0],[38,3],[38,1],[37,3],[37,2],[39,1],[39,1],[39,3],[40,0],[40,1],[40,1],[40,1],[35,2],[35,0],[26,1],[26,1],[12,1],[36,3],[36,1],[36,1],[36,0],[51,0],[51,1],[51,5],[51,4],[54,1],[54,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
/**/) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
          this.$ = $$[$0-4];
          return extend(this.$, $$[$0-2]);
        
break;
case 2:
          this.$ = $$[$0-5];
          yy.addDeclaration(this.$, { include: $$[$0-1] });
          return extend(this.$, $$[$0-3]);
        
break;
case 5:this.$ = $$[$0-1]; yy.addDeclaration(this.$, $$[$0]);
break;
case 6:this.$ = {};
break;
case 7:this.$ = {start: $$[$0]};
break;
case 8:this.$ = {lex: $$[$0]};
break;
case 9:this.$ = {operator: $$[$0]};
break;
case 10:this.$ = {include: $$[$0]};
break;
case 11:this.$ = {parseParam: $$[$0]};
break;
case 12:this.$ = {options: $$[$0]};
break;
case 13:this.$ = {unknownDecl: $$[$0]};
break;
case 14:this.$ = $$[$0];
break;
case 15:this.$ = $$[$0];
break;
case 16:this.$ = [$$[$0-1]]; this.$.push.apply(this.$, $$[$0]);
break;
case 17:this.$ = 'left';
break;
case 18:this.$ = 'right';
break;
case 19:this.$ = 'nonassoc';
break;
case 20:this.$ = $$[$0-1]; this.$.push($$[$0]);
break;
case 21:this.$ = [$$[$0]];
break;
case 22:this.$ = $$[$0];
break;
case 23:
            this.$ = $$[$0-1];
            if ($$[$0][0] in this.$)
                this.$[$$[$0][0]] = this.$[$$[$0][0]].concat($$[$0][1]);
            else
                this.$[$$[$0][0]] = $$[$0][1];
        
break;
case 24:this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];
break;
case 25:this.$ = [$$[$0-3], $$[$0-1]];
break;
case 26:this.$ = $$[$0-2]; this.$.push($$[$0]);
break;
case 27:this.$ = [$$[$0]];
break;
case 28:
            this.$ = [($$[$0-2].length ? $$[$0-2].join(' ') : '')];
            if($$[$0]) this.$.push($$[$0]);
            if($$[$0-1]) this.$.push($$[$0-1]);
            if (this.$.length === 1) this.$ = this.$[0];
        
break;
case 29:this.$ = $$[$0-1]; this.$.push($$[$0])
break;
case 30:this.$ = [];
break;
case 31:this.$ = $$[$0-2]; this.$.push($$[$0].join(' '));
break;
case 32:this.$ = [$$[$0].join(' ')];
break;
case 33:this.$ = $$[$0-2] + $$[$0-1] + "[" + $$[$0] + "]"; 
break;
case 34:this.$ = $$[$0-1] + $$[$0]; 
break;
case 35:this.$ = $$[$0]; 
break;
case 36:this.$ = ebnf ? "'" + $$[$0] + "'" : $$[$0]; 
break;
case 37:this.$ = '(' + $$[$0-1].join(' | ') + ')'; 
break;
case 38:this.$ = ''
break;
case 42:this.$ = {prec: $$[$0]};
break;
case 43:this.$ = null;
break;
case 44:this.$ = $$[$0];
break;
case 45:this.$ = yytext;
break;
case 46:this.$ = yytext;
break;
case 47:this.$ = $$[$0-1];
break;
case 48:this.$ = $$[$0];
break;
case 49:this.$ = '$$ =' + $$[$0] + ';';
break;
case 50:this.$ = '';
break;
case 51:this.$ = '';
break;
case 52:this.$ = $$[$0];
break;
case 53:this.$ = $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 54:this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 55: this.$ = yytext; 
break;
case 56: this.$ = $$[$0-1]+$$[$0]; 
break;
}
},
table: [{3:1,4:2,5:[2,6],11:[2,6],13:[2,6],15:[2,6],18:[2,6],19:[2,6],21:[2,6],23:[2,6],24:[2,6],25:[2,6]},{1:[3]},{5:[1,3],10:4,11:[1,5],13:[1,6],14:7,15:[1,8],16:9,17:10,18:[1,11],19:[1,14],21:[1,13],22:12,23:[1,15],24:[1,16],25:[1,17]},{6:18,12:21,27:19,28:20,42:[1,22]},{5:[2,5],11:[2,5],13:[2,5],15:[2,5],18:[2,5],19:[2,5],21:[2,5],23:[2,5],24:[2,5],25:[2,5]},{12:23,42:[1,22]},{5:[2,8],11:[2,8],13:[2,8],15:[2,8],18:[2,8],19:[2,8],21:[2,8],23:[2,8],24:[2,8],25:[2,8]},{5:[2,9],11:[2,9],13:[2,9],15:[2,9],18:[2,9],19:[2,9],21:[2,9],23:[2,9],24:[2,9],25:[2,9]},{5:[2,10],11:[2,10],13:[2,10],15:[2,10],18:[2,10],19:[2,10],21:[2,10],23:[2,10],24:[2,10],25:[2,10]},{5:[2,11],11:[2,11],13:[2,11],15:[2,11],18:[2,11],19:[2,11],21:[2,11],23:[2,11],24:[2,11],25:[2,11]},{5:[2,12],11:[2,12],13:[2,12],15:[2,12],18:[2,12],19:[2,12],21:[2,12],23:[2,12],24:[2,12],25:[2,12]},{5:[2,13],11:[2,13],13:[2,13],15:[2,13],18:[2,13],19:[2,13],21:[2,13],23:[2,13],24:[2,13],25:[2,13]},{12:26,20:24,26:25,42:[1,22],43:[1,27]},{12:26,20:28,26:25,42:[1,22],43:[1,27]},{12:26,20:29,26:25,42:[1,22],43:[1,27]},{42:[2,17],43:[2,17]},{42:[2,18],43:[2,18]},{42:[2,19],43:[2,19]},{5:[1,31],7:30,8:[2,3]},{5:[2,22],8:[2,22],12:21,28:32,42:[1,22]},{5:[2,24],8:[2,24],42:[2,24]},{29:[1,33]},{5:[2,46],11:[2,46],13:[2,46],15:[2,46],18:[2,46],19:[2,46],21:[2,46],23:[2,46],24:[2,46],25:[2,46],29:[2,46],31:[2,46],32:[2,46],42:[2,46],43:[2,46],50:[2,46],53:[2,46]},{5:[2,7],11:[2,7],13:[2,7],15:[2,7],18:[2,7],19:[2,7],21:[2,7],23:[2,7],24:[2,7],25:[2,7]},{5:[2,16],11:[2,16],12:26,13:[2,16],15:[2,16],18:[2,16],19:[2,16],21:[2,16],23:[2,16],24:[2,16],25:[2,16],26:34,42:[1,22],43:[1,27]},{5:[2,21],11:[2,21],13:[2,21],15:[2,21],18:[2,21],19:[2,21],21:[2,21],23:[2,21],24:[2,21],25:[2,21],42:[2,21],43:[2,21]},{5:[2,44],11:[2,44],13:[2,44],15:[2,44],18:[2,44],19:[2,44],21:[2,44],23:[2,44],24:[2,44],25:[2,44],31:[2,44],32:[2,44],42:[2,44],43:[2,44],50:[2,44],53:[2,44]},{5:[2,45],11:[2,45],13:[2,45],15:[2,45],18:[2,45],19:[2,45],21:[2,45],23:[2,45],24:[2,45],25:[2,45],31:[2,45],32:[2,45],42:[2,45],43:[2,45],50:[2,45],53:[2,45]},{5:[2,15],11:[2,15],12:26,13:[2,15],15:[2,15],18:[2,15],19:[2,15],21:[2,15],23:[2,15],24:[2,15],25:[2,15],26:34,42:[1,22],43:[1,27]},{5:[2,14],11:[2,14],12:26,13:[2,14],15:[2,14],18:[2,14],19:[2,14],21:[2,14],23:[2,14],24:[2,14],25:[2,14],26:34,42:[1,22],43:[1,27]},{8:[1,35]},{8:[2,4],9:[1,36]},{5:[2,23],8:[2,23],42:[2,23]},{15:[2,30],30:37,31:[2,30],32:[2,30],33:38,34:39,42:[2,30],43:[2,30],44:[2,30],49:[2,30],50:[2,30],53:[2,30]},{5:[2,20],11:[2,20],13:[2,20],15:[2,20],18:[2,20],19:[2,20],21:[2,20],23:[2,20],24:[2,20],25:[2,20],42:[2,20],43:[2,20]},{1:[2,1]},{8:[1,40]},{31:[1,41],32:[1,42]},{31:[2,27],32:[2,27]},{15:[2,43],31:[2,43],32:[2,43],35:43,37:44,39:46,42:[1,47],43:[1,48],44:[1,49],49:[1,45],50:[2,43],53:[2,43]},{1:[2,2]},{5:[2,25],8:[2,25],42:[2,25]},{15:[2,30],31:[2,30],32:[2,30],33:50,34:39,42:[2,30],43:[2,30],44:[2,30],49:[2,30],50:[2,30],53:[2,30]},{15:[1,53],31:[2,50],32:[2,50],36:51,50:[1,52],53:[1,54]},{15:[2,29],31:[2,29],32:[2,29],42:[2,29],43:[2,29],44:[2,29],45:[2,29],49:[2,29],50:[2,29],53:[2,29]},{12:26,26:55,42:[1,22],43:[1,27]},{15:[2,38],31:[2,38],32:[2,38],40:56,41:[2,38],42:[2,38],43:[2,38],44:[2,38],45:[2,38],46:[1,57],47:[1,58],48:[1,59],49:[2,38],50:[2,38],53:[2,38]},{15:[2,35],31:[2,35],32:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],47:[2,35],48:[2,35],49:[2,35],50:[2,35],53:[2,35]},{15:[2,36],31:[2,36],32:[2,36],41:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],47:[2,36],48:[2,36],49:[2,36],50:[2,36],53:[2,36]},{32:[2,30],34:61,38:60,42:[2,30],43:[2,30],44:[2,30],45:[2,30]},{31:[2,26],32:[2,26]},{31:[2,28],32:[2,28]},{50:[2,51],51:62,52:[2,51],54:63,55:[1,64]},{31:[2,48],32:[2,48]},{31:[2,49],32:[2,49]},{15:[2,42],31:[2,42],32:[2,42],50:[2,42],53:[2,42]},{15:[2,34],31:[2,34],32:[2,34],41:[1,65],42:[2,34],43:[2,34],44:[2,34],45:[2,34],49:[2,34],50:[2,34],53:[2,34]},{15:[2,39],31:[2,39],32:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39],45:[2,39],49:[2,39],50:[2,39],53:[2,39]},{15:[2,40],31:[2,40],32:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40],45:[2,40],49:[2,40],50:[2,40],53:[2,40]},{15:[2,41],31:[2,41],32:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41],49:[2,41],50:[2,41],53:[2,41]},{32:[1,67],45:[1,66]},{32:[2,32],37:44,39:46,42:[1,47],43:[1,48],44:[1,49],45:[2,32]},{50:[1,69],52:[1,68]},{50:[2,52],52:[2,52],55:[1,70]},{50:[2,55],52:[2,55],55:[2,55]},{15:[2,33],31:[2,33],32:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],49:[2,33],50:[2,33],53:[2,33]},{15:[2,37],31:[2,37],32:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],47:[2,37],48:[2,37],49:[2,37],50:[2,37],53:[2,37]},{32:[2,30],34:71,42:[2,30],43:[2,30],44:[2,30],45:[2,30]},{31:[2,47],32:[2,47]},{50:[2,51],51:72,52:[2,51],54:63,55:[1,64]},{50:[2,56],52:[2,56],55:[2,56]},{32:[2,31],37:44,39:46,42:[1,47],43:[1,48],44:[1,49],45:[2,31]},{50:[1,69],52:[1,73]},{50:[2,54],52:[2,54],54:74,55:[1,64]},{50:[2,53],52:[2,53],55:[1,70]}],
defaultActions: {35:[2,1],40:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var transform = require('./ebnf-transform').transform;
var ebnf = false;


// transform ebnf to bnf if necessary
function extend (json, grammar) {
    json.bnf = ebnf ? transform(grammar) : grammar;
    return json;
}
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
/**/) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:this.pushState('code');return 5;
break;
case 1:return 44;
break;
case 2:return 45;
break;
case 3:return 46;
break;
case 4:return 47;
break;
case 5:return 48;
break;
case 6:/* skip whitespace */
break;
case 7:/* skip comment */
break;
case 8:/* skip comment */
break;
case 9:yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 41;
break;
case 10:return 42;
break;
case 11:yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 43;
break;
case 12:yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 43;
break;
case 13:return 29;
break;
case 14:return 31;
break;
case 15:return 32;
break;
case 16:this.pushState(ebnf ? 'ebnf' : 'bnf'); return 5;
break;
case 17:if (!yy.options) yy.options = {}; ebnf = yy.options.ebnf = true;
break;
case 18:return 49;
break;
case 19:return 11;
break;
case 20:return 23;
break;
case 21:return 24;
break;
case 22:return 25;
break;
case 23:return 21;
break;
case 24:return 19;
break;
case 25:return 13;
break;
case 26:return 18;
break;
case 27:/* ignore type */
break;
case 28:yy_.yytext = yy_.yytext.substr(2, yy_.yyleng-4); return 15;
break;
case 29:yy_.yytext = yy_.yytext.substr(2, yy_.yytext.length-4); return 15;
break;
case 30:yy.depth = 0; this.pushState('action'); return 50;
break;
case 31:yy_.yytext = yy_.yytext.substr(2, yy_.yyleng-2); return 53;
break;
case 32:/* ignore bad characters */
break;
case 33:return 8;
break;
case 34:return 55;
break;
case 35:return 55;
break;
case 36:return 55; // regexp with braces or quotes (and no spaces)
break;
case 37:return 55;
break;
case 38:return 55;
break;
case 39:return 55;
break;
case 40:return 55;
break;
case 41:yy.depth++; return 50;
break;
case 42:if (yy.depth==0) this.begin(ebnf ? 'ebnf' : 'bnf'); else yy.depth--; return 52;
break;
case 43:return 9;
break;
}
},
rules: [/^(?:%%)/,/^(?:\()/,/^(?:\))/,/^(?:\*)/,/^(?:\?)/,/^(?:\+)/,/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:\/\*(.|\n|\r)*?\*\/)/,/^(?:\[([a-zA-Z_][a-zA-Z0-9_-]*)\])/,/^(?:([a-zA-Z_][a-zA-Z0-9_-]*))/,/^(?:"[^"]+")/,/^(?:'[^']+')/,/^(?::)/,/^(?:;)/,/^(?:\|)/,/^(?:%%)/,/^(?:%ebnf\b)/,/^(?:%prec\b)/,/^(?:%start\b)/,/^(?:%left\b)/,/^(?:%right\b)/,/^(?:%nonassoc\b)/,/^(?:%parse-param\b)/,/^(?:%options\b)/,/^(?:%lex[\w\W]*?\/lex\b)/,/^(?:%[a-zA-Z]+[^\r\n]*)/,/^(?:<[a-zA-Z]*>)/,/^(?:\{\{[\w\W]*?\}\})/,/^(?:%\{(.|\r|\n)*?%\})/,/^(?:\{)/,/^(?:->.*)/,/^(?:.)/,/^(?:$)/,/^(?:\/\*(.|\n|\r)*?\*\/)/,/^(?:\/\/.*)/,/^(?:\/[^ /]*?['"{}'][^ ]*?\/)/,/^(?:"(\\\\|\\"|[^"])*")/,/^(?:'(\\\\|\\'|[^'])*')/,/^(?:[/"'][^{}/"']+)/,/^(?:[^{}/"']+)/,/^(?:\{)/,/^(?:\})/,/^(?:(.|\n|\r)+)/],
conditions: {"bnf":{"rules":[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true},"ebnf":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true},"action":{"rules":[33,34,35,36,37,38,39,40,41,42],"inclusive":false},"code":{"rules":[33,43],"inclusive":false},"INITIAL":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = bnf;
exports.Parser = bnf.Parser;
exports.parse = function () { return bnf.parse.apply(bnf, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}