import React from 'react';
import Link from 'next/link';
import { PaginationStyle, PaginationList } from './Pagnation.style';
import { Icon } from '../UIkit';

const Pagination = ({ currentPage, totalPostCount, pathname }) => {
  /*
 pages give number,base on number we create a array. base on array we map a list elements
 totalPostCount = 3
 conver into array [0,1,2]
 base on array create list in array

*/

  let pageIntoArray = Array.from(Array(totalPostCount).keys());

  if(pageIntoArray.length <= 1) return null

  return (
    <PaginationStyle>
      <PaginationList>
        {currentPage > 1 && (
          <li>
            <Link
              href={{
                pathname: `/${pathname}`,
                query: { page: currentPage - 1 },
              }}
            >
              <Icon name="chevron-left" />
            </Link>
          </li>
        )}

        {pageIntoArray.map((page) => {
          return (
            <li key={page}>
              <Link
                href={{ pathname: `/${pathname}`, query: { page: page + 1 } }}
                className={currentPage === page + 1 ? 'active' : ''}
              >
                {page + 1}
              </Link>
            </li>
          );
        })}
        {currentPage < pageIntoArray.length && (
          <li>
            <Link
              href={{
                pathname: `/${pathname}`,
                query: { page: currentPage + 1 },
              }}
            >
              <Icon name="chevron-right" />
            </Link>
          </li>
        )}
      </PaginationList>
    </PaginationStyle>
  );
};

export default Pagination;
