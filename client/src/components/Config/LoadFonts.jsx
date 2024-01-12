import WebFont from "webfontloader";

const LoadFonts = (callback) => {
    WebFont.load({
        google:{
            families:['Quicksand:300,400,500,600,700', 'Lato: 100,200,300,400,500,600,700,800,900']
        },
        active:callback,
    });
};

export default LoadFonts;