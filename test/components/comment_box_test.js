import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
    it('has a class name comment box', () => {
        const component = renderComponent(CommentBox);
        expect(component).to.have.class('comment-box');
    });

    it('has a textarea', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('button')).to.exist;
    });
});