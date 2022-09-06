import { render, within } from '@testing-library/react';
import CaffeineTable from "../../components/caffeineTable";


describe('Caffeine table has the right components', () => {
  render(<CaffeineTable />);
  const headers = document.querySelectorAll('.table-headers .col, .table-headers .col-lg-4');

  describe('Table properties', () => {
    it('should have three headers', () => {
      expect(headers.length).toEqual(3);
    })

    it('should have a time field', () => {
      within(headers[0]).getByText('Time');
    });

    it('should have an amount field', () => {
      within(headers[1]).getByText('Amount');
    });

    it ('should have a unit of measurement field', () => {
      within(headers[2]).getByText('Unit of Measurement');
    });
  });


});