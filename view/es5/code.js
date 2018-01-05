/**
 * Created by Administrator on 2017/12/19.
 */
var luke = {
    jedi: true,
    age: 28
};

// bad
var isJedi = luke['jedi'];

// good
var isJedi = luke.jedi;

// bad
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
var items = getItems(),
    goSportsTeam = true;
dragonball = 'z';

// good
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';


// bad - unnecessary function call
function () {
    var name = getName();

    if (!arguments.length) {
        return false;
    }

    this.setFirstName(name);

    return true;
}

// good
function () {
    var name;

    if (!arguments.length) {
        return false;
    }

    name = getName();
    this.setFirstName(name);

    return true;
}

// bad
if (test)
    return false;

// good
if (test) return false;

// good
if (test) {
    return false;
}

// bad
function () { return false; }

// good
function () {
    return false;
}

// bad
var active = true;  // is current tab

// good
// is current tab
var active = true;

// bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    var type = this.type || 'no type';

    return type;
}

// good
function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    var type = this.type || 'no type';

    return type;
}

// bad
function test(){
    console.log('test');
}

// good
function test() {
    console.log('test');
}


// bad
var x=y+5;

// good
var x = y + 5;

// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
    find('.selected').
    highlight().
    end().
    find('.open').
    updateCount();

// good
$('#items')
    .find('.selected')
    .highlight()
    .end()
    .find('.open')
    .updateCount();


// bad
var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
var leds = stage.selectAll('.led')
    .data(data)
    .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
    .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// bad
if (foo) {
    return bar;
}
return baz;

// good
if (foo) {
    return bar;
}

return baz;





