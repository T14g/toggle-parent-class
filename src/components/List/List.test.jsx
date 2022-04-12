import { render } from "@testing-library/react";

import List from "./index";

describe('List', () => {
    it('should render the List component on screen', () => {
        const container = render(List);
        expect(container.baseElement).toBeInTheDocument();
    });
})