// global variables
const canvas = document.querySelector("#glcanvas");
const glctx = canvas.getContext("webgl");

function update() 
{
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    // Set Clear Color to black, fully opaque 
    glctx.clearColor(0.0, 0.0, 1.0, 1.0);

    // Clear the color buffer with specified clear color
    glctx.clear(glctx.COLOR_BUFFER_BIT);

    requestAnimationFrame(update);
}

function main()
{
    if (glctx == null)
    {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    requestAnimationFrame(update);
}