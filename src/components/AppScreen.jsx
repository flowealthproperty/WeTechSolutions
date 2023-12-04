import { TbMenu2 } from "react-icons/tb";
import { Logo } from "./Logo";
import { forwardRef } from "react";
import clsx from "clsx";
import Button from "./Button";

export const AppScreen = ({ children, className, ...props }) => {
    return (
      <div className={clsx("flex flex-col", className)} {...props}>
        <div className="flex justify-between items-center px-4 pt-4">
          <Logo className="text-xs" />
          <div className="flex gap-1 items-center">
          <Button className="flex text-[10px] w-[65px] justify-between text-white">
          ContactUs
          </Button>
          <TbMenu2 className="text-sm  text-white" /> 
          </div>       
          </div>
          {children}
      </div>
    );
  };
  
  AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-black">
      {children}
    </div>
  );
});

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  );
});

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("mt-6 flex-auto rounded-t-2xl bg-white", className)}
    >
      {children}
    </div>
  );
});

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  );
});

 