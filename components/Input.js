import React from "react";
import { TextInput, Platform } from "react-native";
import { styled } from "nativewind";

const StyledInput = styled(TextInput);

const Input = ({ placeholder, value, onChangeText, style, ...rest }) => {
  const borderColor =
    Platform.OS === "ios" ? "border-gray-300" : "border-gray-400";
  const shadowStyle = Platform.OS === "android" ? "shadow-md" : "shadow-lg";

  return (
    <StyledInput
      className={`
        px-4 py-2 rounded-lg border ${borderColor} 
        focus:border-red-500 focus:ring-3 focus:ring-red-300 
        ${shadowStyle}
        ${Platform.OS === "ios" ? "text-lg" : "text-base"} 
      `}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style}
      {...rest}
    />
  );
};

export default Input;
