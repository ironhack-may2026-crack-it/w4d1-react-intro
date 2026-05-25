
function MyFirstComponent() {

    const subtitle = "This is a subtitle"

    const companyDetails = {
        name: "Ironhack",
        headquarters: "Madrid"
    }

    function renderBanner() {
        return <div>This is a banner</div>
    }


    const divStyle = {
        color: "#fff",
        background: "purple",
        fontSize: "120%",
        margin: "1em auto",
        padding: "1em"
    }


    return (
        <>
            <h1>This is MyFirstComponent</h1>
            <h2>{subtitle}</h2>

            {/* this is a comment */}
            <p>Total: {2 + 2}</p>

            <div style={divStyle}>
                <p>{companyDetails.name.toUpperCase()}</p>
                <p>{companyDetails.headquarters}</p>
            </div>

            {renderBanner()}

        </>
    )
}

export default MyFirstComponent

