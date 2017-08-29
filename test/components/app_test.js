import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use to group similar tests
describe('App', () => {
    //use to test a single attribute of a target
    it('shows the correct text', () => {

		const component = renderComponent(App);
		//use to make an assertion about a target
		expect(component).to.contain('Test template');
	});
});

