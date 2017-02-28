var React = require('react');

function testPrint (object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
    return props.isLoading === true
        ? <p> Loading! </p>
        : <p> Confirm Battle : {testPrint(props)} </p>
}

module.exports = ConfirmBattle;
