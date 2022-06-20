var VSHARED_SOURCE = 
    'attribute vec4 a_Position;\n'+
    'void main(){ \n'+
    ' gl_Position = a_Position;\n'+
    'gl_PositSize = 10.0'+
    '}';

var FSHARDER_SOURCE = 'precision mediump float;\n'+
    'uniform vec4 u_FragColor;\n'+
    'void main(){ \n'+
        'gl_FragColor = u_FragColor;\n'+
    '}';

    function main(){
        
    }
