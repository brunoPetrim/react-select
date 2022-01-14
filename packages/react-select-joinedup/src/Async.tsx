import React, { MutableRefObject, ReactElement, RefAttributes } from 'react';
import SelectV3 from './SelectV3';
import { GroupBase } from './types';
import useStateManager from './useStateManager';
import useAsync from './useAsync';
import type { AsyncProps } from './useAsync';
export type { AsyncProps };

type AsyncSelect = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: AsyncProps<Option, IsMulti, Group> &
    RefAttributes<SelectV3<Option, IsMulti, Group>>
) => ReactElement;

const AsyncSelect = React.forwardRef(
  <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: AsyncProps<Option, IsMulti, Group>,
    ref:
      | ((instance: SelectV3<Option, IsMulti, Group> | null) => void)
      | MutableRefObject<SelectV3<Option, IsMulti, Group> | null>
      | null
  ) => {
    const stateManagedProps = useAsync(props);
    const selectProps = useStateManager(stateManagedProps);

    return <SelectV3 ref={ref} {...selectProps} />;
  }
) as AsyncSelect;

export { useAsync };
export default AsyncSelect;
