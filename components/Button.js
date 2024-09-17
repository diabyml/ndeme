import { styled } from "nativewind";
import { ActivityIndicator, Platform } from "react-native";
import { TouchableOpacity, Text, View } from "react-native";

const StyledButton = styled(TouchableOpacity);

const StyledText = styled(Text);

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  buttonClassnames,
  disabled,
  loading,
  loadingText,
  ...rest
}) => {
  const bgColor = disabled
    ? "bg-gray-400"
    : Platform.OS === "ios"
    ? "bg-blue-500"
    : "bg-blue-700";
  const shadowStyles = disabled
    ? "shadow-none"
    : Platform.OS === "android"
    ? "shadow-md"
    : "shadow-lg";

  return (
    <StyledButton
      className={`px-4 py-2 rounded-lg   ${bgColor} ${shadowStyles}   ${
        disabled ? "opacity-50" : "opacity-100"
      }  ${buttonClassnames}`}
      style={style}
      onPress={disabled ? null : onPress} // Prevent clicking when disabled
      activeOpacity={disabled ? 1 : 0.7} // Remove click animation when disabled
      disabled={disabled} // Disable touch when true
      {...rest}
    >
      {loading ? (
        <View className=" justify-center flex-row items-center space-x-2">
          <StyledText
            className="text-white text-center font-semibold"
            style={textStyle}
          >
            {loadingText}
          </StyledText>
          <ActivityIndicator />
        </View>
      ) : (
        <StyledText
          className="text-white text-center font-semibold"
          style={textStyle}
        >
          {title}
        </StyledText>
      )}
    </StyledButton>
  );
};

export default Button;
