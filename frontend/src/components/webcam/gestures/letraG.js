import * as fp from "fingerpose";
//C
const letraGGesture = new fp.GestureDescription('letraG');

// thumb:
letraGGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
letraGGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
letraGGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraGGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);

// index:
letraGGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letraGGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
letraGGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

// middle:
letraGGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
letraGGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
letraGGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0);

// Ring:
letraGGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
letraGGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 1.0);
letraGGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 1.0);

// Pinky:
letraGGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
letraGGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
letraGGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);

// give additional weight 
letraGGesture.setWeight(fp.Finger.Thumb, 1);
letraGGesture.setWeight(fp.Finger.Index, 1);
letraGGesture.setWeight(fp.Finger.Middle, 1);
letraGGesture.setWeight(fp.Finger.Ring, 1);
letraGGesture.setWeight(fp.Finger.Pinky, 1);

export default letraGGesture;