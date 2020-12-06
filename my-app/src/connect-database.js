const { Client } = require("cassandra-driver");

export function formatTime(time) {
    let hours = parseInt(time.split(":")[0]);
    if (time.includes("PM")) {
        hours = (hours + 12) % 24;
    }
    return (hours < 10 ? "0" : "") + String(hours) + ":" + time.split(":")[1].substr(0, 2) + ":00";
};

export async function submit(state) {

    // preprocessing all of the submitted data
    if (state.driver) {
        let first_name = state.name.split(" ")[0];
        let last_name = state.name.split(" ")[1];
        if (!state.email.match(new RegExp('\w+@\w+.\w+'))) {
            // throw error, invalid email
            // this probably needs to be added as another element on the page
        }
        let num_pass = parseInt(state.numPass);
        let added_time = parseInt(state.addedTime);

        const client = new Client({
            cloud: {
                secureConnectBundle: "../secure-connect-DriverInformation.zip",
            },
            credentials: { username: "DrivingInformation", password: "0AsRoj70Mb6V" },
        });

        await client.connect();
        console.log("connected");

        // Set the right keyspace
        await client.execute("USE \"Test\";");

        // Add the entry to the database
        const rs = await client.execute("INSERT INTO all_potential_carpoolers (email, phone_num, first_name, last_name, addr_starting, addr_destination, free_mon, free_tue, free_wed, free_thu, free_fri, free_sat, free_sun, looking_time_start, looking_time_end, willing_to_drive, num_passengers, time_added) " +
            `VALUES (\'${state.email}\', \'${state.phone}\', \'${first_name}\', \'${last_name}\', \'${state.startPoint}\', \'${state.endPoint}\', ${state.mon}, ${state.tue}, ${state.wed}, ${state.thu}, ${state.fri}, ${state.sat}, ${state.sun}, \'${this.formatTime(state.startTime)}\', \'${this.formatTime(state.endTime)}\', ${state.endTime}, ${state.numPass}, ${state.addedTime});`);

        await client.shutdown();
    }
    // get search results
};