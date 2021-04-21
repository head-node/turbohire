import React from "react";

const InterviewAvailability = () => {
  return (
    <>
      <div className="interview">
        <label for="email">1. Email*</label>
        <br />
        <input type="email" name="email" id="email" value="email" placeholder="Example - userid@gmail.com"/>
        <br />
        <label for="location">2. Location</label>
        <br />
        <input type="text" name="Location" id="Location" value="Location" placeholder="Search or enter your location"/>
        <br />
        <label for="date">3. Interview Date</label>
        <br />
        <input type="date" name="date" id="date" value="date"/>
        <br />
        <label for="time">4. Interview Time</label>
        <br />
        <input type="time" name="time" id="time" value="time" />
        <br />
        <label for="timezone">5. Time Zone</label>
        <br />
        <select name="timezone" id="timezone">
        <option value="Select time zone" disabled selected>Select or Search a time zone from below</option>
          <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
          <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
          <option value="-10:00">(GMT -10:00) Hawaii</option>
          <option value="-09:50">(GMT -9:30) Taiohae</option>
          <option value="-09:00">(GMT -9:00) Alaska</option>
          <option value="-08:00">
            (GMT -8:00) Pacific Time (US &amp; Canada)
          </option>
          <option value="-07:00">
            (GMT -7:00) Mountain Time (US &amp; Canada)
          </option>
          <option value="-06:00">
            (GMT -6:00) Central Time (US &amp; Canada), Mexico City
          </option>
          <option value="-05:00">
            (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
          </option>
          <option value="-04:50">(GMT -4:30) Caracas</option>
          <option value="-04:00">
            (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
          </option>
          <option value="-03:50">(GMT -3:30) Newfoundland</option>
          <option value="-03:00">
            (GMT -3:00) Brazil, Buenos Aires, Georgetown
          </option>
          <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
          <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
          <option value="+00:00">
            (GMT) Western Europe Time, London, Lisbon, Casablanca
          </option>
          <option value="+01:00">
            (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
          </option>
          <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
          <option value="+03:00">
            (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
          </option>
          <option value="+03:50">(GMT +3:30) Tehran</option>
          <option value="+04:00">
            (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
          </option>
          <option value="+04:50">(GMT +4:30) Kabul</option>
          <option value="+05:00">
            (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
          </option>
          <option value="+05:50">
            (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
          </option>
          <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
          <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
          <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
          <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
          <option value="+08:00">
            (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
          </option>
          <option value="+08:75">(GMT +8:45) Eucla</option>
          <option value="+09:00">
            (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
          </option>
          <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
          <option value="+10:00">
            (GMT +10:00) Eastern Australia, Guam, Vladivostok
          </option>
          <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
          <option value="+11:00">
            (GMT +11:00) Magadan, Solomon Islands, New Caledonia
          </option>
          <option value="+11:50">(GMT +11:30) Norfolk Island</option>
          <option value="+12:00">
            (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
          </option>
          <option value="+12:75">(GMT +12:45) Chatham Islands</option>
          <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
          <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
        </select>
        <br />
        <label for="language">6. Interview Medium</label>
        <br />
        <select name="language" id="language">
        <option value="Select language" disabled selected>Select or Search medium of interview from below</option>
          <option value="English">
            English
          </option>
          <option value="Hindi">Hindi</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </>
  );
};

export default InterviewAvailability;
