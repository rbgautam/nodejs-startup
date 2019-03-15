import {expect} from 'chai'
import fs from 'fs'


describe("Our Fisrt test",()=>{
    it('should pass',()=>{
        expect(true).to.equal(true);
    });
});

describe('index h1 test',()=>{
    it('Should say hello',()=>{
        const indexFile = fs.readFileSync('./src/index.html',"utf-8");

        // var jsdom = require('jsdom');
        // const { JSDOM } = jsdom;
        // const { window } = new JSDOM('./src/index.html');
        // var $ = require('jquery')(window);

        // const h1 = $('h1');
        // console.log(h1);

    })
}) 


describe('jquery test',()=>{
    it('Should print success',()=>{
        const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        JSDOM.fromFile('./src/index.html')
            .then((dom) => {
                // var $ = require('jquery')(dom.window);
                // console.log($('h1').innerHTML);
                const h1= dom.window.document.querySelector("h1").textContent;
                dom.window.close();
                expect(h1).to.equal('Users Api Data');
        });
        
        
    });
});