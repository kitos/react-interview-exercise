import React from 'react';
import TestRenderer from 'react-test-renderer';
import Pagination from '../Pagination';

describe('<Pagination>', () => {
  it('should render without errors', () => {
    let $pagination = TestRenderer.create(<Pagination />);

    expect($pagination).toBeDefined();
  });

  it('should evaluate pages count correctly', () => {
    let $paginationWithOnePage = TestRenderer.create(
      <Pagination itemsPerPage={2} total={2} />
    );
    expect($paginationWithOnePage.toJSON().children.length).toBe(1);

    let $paginationWithTwoPage = TestRenderer.create(
      <Pagination itemsPerPage={2} total={3} />
    );
    expect($paginationWithTwoPage.toJSON().children.length).toBe(2);

    let $oneMorePagination = TestRenderer.create(
      <Pagination itemsPerPage={2} total={9} />
    );
    expect($oneMorePagination.toJSON().children.length).toBe(5);
  });
});
