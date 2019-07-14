import React, { useEffect } from "react";
import Select, { components } from "react-select";
import { groupedOptions } from "./docs/data";

const controlStyles = {
  padding: "10px",
  flexGrow: "2",
  border: "none",
  textOverflow: "ellipsis"
};

const containerStyles = {
  display: "flex",
  border: "1px solid #ccc",
  borderRadius: `5px`
};

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const MultiValueContainer = props => null;

const ClearIndicator = props => null;

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>Icon cua tao</span>
    <span>{data.label}</span>
  </div>
);

export default () => {
  let selectRef;

  const ControlComponent = props => {
    useEffect(() => {
      if (isShown) selectRef.focus();
    });

    const selectedValue = props
      .getValue()
      .map(t => props.selectProps.getOptionLabel(t))
      .join(", ");

    return (
      <React.Fragment>
        <section onBlur={() => setIsShown(false)}>
          <section onClick={() => setIsShown(!isShown)} style={containerStyles}>
            <input style={controlStyles} value={selectedValue} />
            <div class=" css-1wy0on6">
              <span class=" css-1okebmr-indicatorSeparator" />
              <div aria-hidden="true" class=" css-tlfecz-indicatorContainer">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  class="css-19bqh2r"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                </svg>
              </div>
            </div>
          </section>
          <components.Control {...props} />
        </section>
      </React.Fragment>
    );
  };
  const [isShown, setIsShown] = React.useState(false);

  return (
    <Select
      styles={{
        control: (str, props) => {
          return Object.assign(str, {
            marginTop: "5px",
            display: isShown ? "" : "none"
          });
        }
      }}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        MultiValueContainer,
        Control: ControlComponent,
        ClearIndicator,
        DropdownIndicator: ClearIndicator,
        IndicatorSeparator: ClearIndicator
      }}
      isMulti
      options={groupedOptions}
      menuIsOpen={isShown}
      formatGroupLabel={formatGroupLabel}
      ref={ref => {
        selectRef = ref;
      }}
    />
  );
};
