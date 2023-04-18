export const codeDump:string = 
    ` 1 of 2 unhandled errors
Unhandled Runtime Error

ReferenceError: PRESEhjilhjTS is not defined
Source

components\ThreeComponents\Lines\Lines.ts (186:6) @ setPreset

  184 | this.MAX_SPEED = PRESETS[val].MAX_SPEED;
  185 | this.frequency = PRESETS[val].frequency;
> 186 | this.position.x = PRESEhjilhjTS[val].position.x;
      |      ^
  187 | this.position.y = PRESETS[val].position.y;
  188 | this.position.z = PRESETS[val].position.z;
  189 | this.PRESET = val

Call Stack
init404
components\ThreeJS\Scene.ts (295:16)
<unknown>
components\ThreeJS\Scene.ts (323:2)
./components/ThreeJS/Scene.ts
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/pages/_app.js (6208:1)
options.factory
/_next/static/chunks/webpack.js (683:31)
__webpack_require__
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/webpack.js (37:33)
fn
/_next/static/chunks/webpack.js (338:21)
Layout/<
components\Layout\Layout.tsx (27:41)
commitHookEffectListMount
node_modules\react-dom\cjs\react-dom.development.js (23150:0)
commitPassiveMountOnFiber
node_modules\react-dom\cjs\react-dom.development.js (24926:0)
commitPassiveMountEffects_complete
node_modules\react-dom\cjs\react-dom.development.js (24891:0)
commitPassiveMountEffects_begin
node_modules\react-dom\cjs\react-dom.development.js (24878:0)
commitPassiveMountEffects
node_modules\react-dom\cjs\react-dom.development.js (24866:0)
flushPassiveEffectsImpl
node_modules\react-dom\cjs\react-dom.development.js (27039:0)
flushPassiveEffects
node_modules\react-dom\cjs\react-dom.development.js (26984:0)
commitRootImpl/<
node_modules\react-dom\cjs\react-dom.development.js (26769:0)

components\ThreeComponents\Lines\Lines.ts (186:6) @ setPreset

  184 | this.MAX_SPEED = PRESETS[val].MAX_SPEED;
  185 | this.frequency = PRESETS[val].frequency;
> 186 | this.position.x = PRESEhjilhjTS[val].position.x;
      |      ^
  187 | this.position.y = PRESETS[val].position.y;
  188 | this.position.z = PRESETS[val].position.z;
  189 | this.PRESET = val

Call Stack
init404
components\ThreeJS\Scene.ts (295:16)
<unknown>
components\ThreeJS\Scene.ts (323:2)
./components/ThreeJS/Scene.ts
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/pages/_app.js (6208:1)
options.factory
/_next/static/chunks/webpack.js (683:31)
__webpack_require__
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/webpack.js (37:33)
fn
/_next/static/chunks/webpack.js (338:21)
Layout/<
1 of 1 unhandled error
Unhandled Runtime Error

TypeError: can't convert undefined to object
Source

components\ThreeComponents\ParticleModel.ts (297:28) @ processMesh

  295 |     (i + j) * 3
  296 |   );
> 297 |   particlesRandomness.set(undefined);
      |                      ^
  298 |   this.uRandom = i + j;
  299 |   sizes[i + j] = 1.1;
  300 | }

Call Stack
loadModel/<
components\ThreeComponents\ParticleModel.ts (326:32)
loadModel
components\ThreeComponents\ParticleModel.ts (321:11)
initPoints
components\ThreeComponents\ParticleModel.ts (338:10)
ParticleModel
components\ThreeComponents\ParticleModel.ts (258:9)
1 of 1 unhandled error
Unhandled Runtime Error

ReferenceError: null is not defined
Source

                 .^7J5PPPY?!:                                                                                                                                                                           
               !5#@@@&###&@@&GJ:                                                                                                                                                                        
             !B@@BJ~:.  ..^7G@@&GBBBBPY7^.                                                                                                                                                              
            Y@@#!        ^?P&@@#BGPPG#@@@#Y^                                                                                                                                                            
        :!JP@@B:     :75#@@&G?~.      :!5&@&Y.                                                                                                                                                          
     :?B@@@@@@7   ^YB@@@BY!.    ::       :P@@G.                 .:^~~~^:.                                                                                          .....             .................  
    J&@@P7^#@@~   5@&57:    .!YB@@BY!:     P@@5             :75B&@@@@@@&#B57:                                                                                    .G#####~           ^#&#############&G. 
  .P@@G^  .#@@~   5@Y   .^?P##P?!5#@@&GJ~. ^@@&.          ^P&@@@@&BGGGB&@@@@&5:                                                                                  Y@@@@@@#:          ^######@@@@@#####G. 
  Y@@G    .#@@~   5@Y:7P#&@@B!.    ^?P&@@#5Y@@#.         7&@@@&Y~.     .~5&@@@&!                                                                                7@@@P?@@@P           .... ~@@@@#. ...   
 .#@@~    .#@@~   5@&&B5!:^?P##P?^    .~JG@@@@5         !@@@@#^           ~&@@@&^    ?JJJ7 .!J5PPP5J~.          :!J5PGPPY?~.      ~JJJJ. ~J5PPP5J!.            ^&@@&^ P@@@J               ~@@@@#        
 .#@@~    .#@@~   5@P^       .!@@&#5!:    :J#@&Y        G@@@@7             J@@@@5   .#@@@BJ&@@@@@@@@@#Y.      !G&@@@###&@@@#J.    J@@@@?B@@@@@@@@@#7          .B@@@?  :&@@@~              ~@@@@#.       
  Y@@P     G@@Y^  5@Y         .&@!7P#&GJ:   :P@@P      .#@@@@^             !@@@@G   .#@@@@@B?~^^~?G@@@@B:    Y@@@&?:.  .~P@@@B:   J@@@@@#Y7!!?P@@@@@?         5@@@G    ?@@@#:             ~@@@@#.       
  .P@@P^   .~JB&#5B@Y         .&@^   P@@J    .#@@!     .#@@@@^             !@@@@B   .#@@@@Y        J@@@@5   7@@@@!        G@@@5   J@@@@G.      ?@@@@B        7@@@&^     P@@@P             ~@@@@#.       
   .J@@&P!:    :75#@#J~.    :7P@@^   5@@J     5@@Y     .#@@@@^             !@@@@B   .#@@@&:        :&@@@#.  P@@@@J???????7G@@@B   J@@@@?       :&@@@B       ^&@@@7      :#@@@J            ~@@@@#.       
    ^@@@@@@GJ~.    ^?P##P?YB&BP&@~   5@@J     B@@7      B@@@@!             7@@@@P   .#@@@&:        :&@@@#.  P@@@@@@@@@@@@@@@@@B   J@@@@?       :&@@@B      .B@@@&J???????G@@@@!           ~@@@@#.       
    ?@@P^?P&@@&P7^   ^Y@@&P?^ .#@~   P@@J    Y@@B.      ?@@@@G            .B@@@@!   .#@@@&:        ^@@@@B.  5@@@&!^^^^^^^^^:^^^   J@@@@?       :&@@@B      5@@@@@@@@@@@@@@@@@@#:          ~@@@@#.       
    7@@B   .~JG@@@BP#&GJ~.    ~&@~   P@@?  !G@@G:        5@@@@G~        .!B@@@@Y    .#@@@@P:      :P@@@@Y   !@@@@?        :!:     J@@@@?       :&@@@B     7@@@@Y7??????????&@@@G          ^@@@@#        
    .G@@Y      :!5G57:    :!5#@@#:   P@@PY#@@#?           ?#@@@@#PY???YP#@@@@#7     .#@@@@@&P?77?5&@@@@P.    ?&@@@P7~^^~?P&@@5.   J@@@@?       :&@@@B    ^&@@@P            7@@@@J   :55555P@@@@&55555J  
     :G@@G~           .~JG@@@BY!:   .#@@@@B5!.             .7P#@@@@@@@@@@@#P7.      .#@@@&!G@@@@@@@@&P!       ^YB@@@@@@@@@&G?.    J@@@@?       :&@@@B   .B@@@&:             P@@@@!  ~@@@@@@@@@@@@@@@@#. 
       ?#@@BY!^:::^~?P#@@&P7^      .P@@P^:                    .^!7?JJJ?7!^.         .#@@@&. :~7?J?7~:           .^!7?JJ?7~:       :!~~~:       .~~~~~   :!~~~^              .~~~!^  .~~~~~~~~~~~~~~~~~  
        .!P#@@@@@@@@@@&Y^        :?#@@5.                                            .#@@@&:                                                                                                             
           .:~7?J?7J#@@B5?!~~!7YG&@@G!                                              .#@@@&:                                                                                                             
                    .!YG&@@@@@@@#P?^                                                 J5YYY.                                                                                                             
                        .^~~!~^:.                                                                                                                                                                       

`
