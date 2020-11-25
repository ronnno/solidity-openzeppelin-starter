const { accounts, contract } = require('@openzeppelin/test-environment');
const { BN } = require('@openzeppelin/test-helpers');
const [ owner ] = accounts;

const { expect } = require('chai');

const MyContract = contract.fromArtifact('MyContract'); // Loads a compiled contract

describe('MyContract', function () {
    it('runs myfunc', async function () {
        const myContract = await MyContract.new({ from: owner });
        expect(await myContract.getValue()).to.be.bignumber.eq(new BN(0xDEADBEEF));
    });
});