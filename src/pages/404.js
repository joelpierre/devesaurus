import React from 'react';
import { BasicLayout } from '../layouts/BasicLayout';

const NotFoundPage = () => (
  <BasicLayout data-test="page-error-404" title="Error page not found">
    404 Error
  </BasicLayout>
);

export default NotFoundPage;
