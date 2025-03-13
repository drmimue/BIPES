let blockly_toolbox = {}
blockly_toolbox.Arduino = `
<xml>
<category name="%{LOGIC}" colour="%{LOGIC_HUE}">
<block type="controls_if"></block>
<block type="logic_compare"></block>
<block type="logic_operation"></block>
<block type="logic_negate"></block>
<block type="logic_boolean"></block>
<block type="logic_null"></block>
<block type="logic_ternary"></block>
</category>
<category name="%{LOOPS}" colour="%{LOOPS_HUE}">
<block type="controls_repeat_ext">
  <value name="TIMES">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>
<block type="controls_whileUntil"></block>
<block type="controls_for">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
  <value name="BY">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
      <block type="controls_forEach"></block>
<block type="controls_flow_statements"></block>
</category>
<category name="%{MATH}" colour="%{MATH_HUE}">
<block type="math_number">
  <field name="NUM">123</field>
</block>
<block type="math_arithmetic">
  <value name="A">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="B">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="math_single">
<value name="NUM">
  <shadow type="math_number">
    <field name="NUM">9</field>
  </shadow>
</value>
</block>
<block type="math_trig">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">45</field>
    </shadow>
  </value>
</block>
<block type="math_constant"></block>
<block type="math_number_property">
  <value name="NUMBER_TO_CHECK">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<block type="math_round">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">3.1</field>
    </shadow>
  </value>
</block>
<block type="math_on_list"></block>
<block type="math_modulo">
  <value name="DIVIDEND">
    <shadow type="math_number">
      <field name="NUM">64</field>
    </shadow>
  </value>
  <value name="DIVISOR">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>
<block type="math_constrain">
  <value name="VALUE">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
  <value name="LOW">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="HIGH">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>
<block type="math_random_int">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>
<block type="math_random_float"></block>
<block type="var_to_int">  
  <field name="VAR">to int</field>
</block>
</category>
<category name="%{TEXT}" colour="%{TEXTS_HUE}">
<block type="text"></block>
<block type="text_join"></block>
<block type="text_append">
  <value name="TEXT">
    <shadow type="text"></shadow>
  </value>
</block>
<block type="text_length">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_isEmpty">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="text_indexOf">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
  <value name="FIND">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_charAt">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
</block>
<block type="text_getSubstring">
  <value name="STRING">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
</block>
<block type="text_changeCase">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_trim">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_print">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_prompt_ext">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_to_str">  
  <field name="VAR">to str</field>
</block>
</category>
<category name="%{TIMING}">
<label text="%{TIMING}"></label>
<!-- Snek Related -->
<block type="snek_delay">
   <value name="time">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="snek_uptime"></block>
<!-- Snek Related End -->
</category>
<category name="In/Out Pins">
<label text="In/Out Pins"></label>
<!-- Snek Related -->
<label text="Snek GPIO Pins"></label>
<block type="pinout"></block>
<block type="snek_gpio_set">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="value">
    <shadow type="logic_boolean">
      <field name="BOOL"></field>
    </shadow>
  </value>
</block>
<block type="snek_gpio_get">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="snek_adc">
 <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="snek_setpower">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1000</field>
    </shadow>
  </value>
  <value name="duty">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
</block>
<!-- Snek Related End -->
</category>
</xml>
`

blockly_toolbox.ESP32 = `
<xml>
<category name="%{LOGIC}" colour="%{LOGIC_HUE}">
<block type="controls_if"></block>
<block type="logic_compare"></block>
<block type="logic_operation"></block>
<block type="logic_negate"></block>
<block type="logic_boolean"></block>
<block type="logic_null"></block>
<block type="logic_ternary"></block>
</category>
<category name="%{LOOPS}" colour="%{LOOPS_HUE}">
<block type="controls_repeat_ext">
  <value name="TIMES">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>
<block type="controls_whileUntil"></block>
<block type="controls_for">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
  <value name="BY">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
      <block type="controls_forEach"></block>
<block type="controls_flow_statements"></block>
</category>
<category name="%{MATH}" colour="%{MATH_HUE}">
<block type="math_number">
  <field name="NUM">123</field>
</block>
<block type="math_arithmetic">
  <value name="A">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="B">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="math_single">
<value name="NUM">
  <shadow type="math_number">
    <field name="NUM">9</field>
  </shadow>
</value>
</block>
<block type="math_trig">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">45</field>
    </shadow>
  </value>
</block>
<block type="math_constant"></block>
<block type="math_number_property">
  <value name="NUMBER_TO_CHECK">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<block type="math_round">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">3.1</field>
    </shadow>
  </value>
</block>
<block type="math_on_list"></block>
<block type="math_modulo">
  <value name="DIVIDEND">
    <shadow type="math_number">
      <field name="NUM">64</field>
    </shadow>
  </value>
  <value name="DIVISOR">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>
<block type="math_constrain">
  <value name="VALUE">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
  <value name="LOW">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="HIGH">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>
<block type="math_random_int">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>
<block type="math_random_float"></block>
<block type="var_to_int">  
  <field name="VAR">to int</field>
</block>
</category>
<category name="%{TEXT}" colour="%{TEXTS_HUE}">
<block type="text"></block>
<block type="text_join"></block>
<block type="text_append">
  <value name="TEXT">
    <shadow type="text"></shadow>
  </value>
</block>
<block type="text_length">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_isEmpty">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="text_indexOf">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
  <value name="FIND">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_charAt">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
</block>
<block type="text_getSubstring">
  <value name="STRING">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
</block>
<block type="text_changeCase">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_trim">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_print">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_prompt_ext">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>
<block type="text_to_str">  
  <field name="VAR">to str</field>
</block>
</category>
<category name="%{LISTS}" colour="%{LISTS_HUE}">
<block type="lists_create_with"></block>
<block type="lists_create_with"></block>
<block type="lists_repeat">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
</block>
<block type="lists_length"></block>
<block type="lists_isEmpty"></block>
<block type="lists_indexOf">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>
<block type="lists_getIndex">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>
<block type="lists_setIndex">
  <value name="LIST">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>
<block type="lists_getSublist">
  <value name="LIST">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>
<block type="lists_split">
  <value name="DELIM">
    <shadow type="text">
      <field name="TEXT">,</field>
    </shadow>
  </value>
</block>
<block type="lists_sort"></block>
</category>
<sep></sep>
<category name="%{VARIABLES}" colour="%{VARIABLES_HUE}" custom="VARIABLE">
</category>
<category name="%{FUNCTIONS}" colour="%{PROCEDURES_HUE}" custom="PROCEDURE">
</category>
<sep></sep>
<category name="BIPES">
<block type="project_metadata">
  <field name="NAME">Project INFO</field>
  <value name="project_author">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="project_iot_id">
    <shadow type="math_number">
      <field name="NUM"></field>
    </shadow>
  </value>
  <value name="project_description">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="try_catch"></block>
<block type="localstorage_store">
  <value name="ADD0">
    <shadow type="utime.vars">
      <field name="VARS">ticks_ms</field>
    </shadow>
  </value>
</block>
</category>
<category name="%{TIMING}">
<label text="%{TIMING}"></label>
<block type="delay">
  <value name="TIME">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="utime.vars"></block>
<block type="utime.ticks_add">
   <value name="TIME1">
    <shadow type="utime.vars"></shadow>
  </value>
  <value name="TIME2">
  <shadow type="math_number">
    <field name="NUM">100</field>
  </shadow>
  </value>
</block>
<block type="utime.ticks_diff"></block>
<block type="set_rtc_esp32"></block>
'%(Timing)'<block type="get_rtc_esp32"></block>
<block type="timer"></block>
<block type="utime.deadline">
  <value name="TIME">
  <shadow type="math_number">
    <field name="NUM">100</field>
  </shadow>
  </value>
</block>
<block type="stop_timer">
  <value name="timerNumber">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<block type="deep_sleep8266">
  <value name="interval">
    <shadow type="math_number">
      <field name="NUM">60</field>
    </shadow>
  </value>
</block>
</category>
<category name="%{MACHINE}">
<category name="CPU">
<label text="ESP32 CPU"></label>
<block type="get_freq"></block>
    <block type="set_freq">
 <value name="freq">
    <shadow type="math_number">
      <field name="NUM">160000000</field>
    </shadow>
  </value>
</block>
<block type="reset"></block>
<block type="machine_unique_id"></block>
<block type="machine_reset_cause"></block>
<block type="reset_cause_soft"></block>
<block type="reset_cause_hard"></block>
<block type="reset_cause_wdt"></block>
<block type="reset_cause_deep"></block>
    </category>
<category name="In/Out Pins">
<label text="In/Out Pins"></label>
<block type="pinout"></block>
<block type="gpio_set">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="value">
    <shadow type="logic_boolean">
      <field name="BOOL"></field>
    </shadow>
  </value>
</block>
<block type="gpio_get">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="pullup">
    <shadow type="logic_boolean">
      <field name="BOOL"></field>
    </shadow>
  </value>
</block>
<block type="adc_esp32">
 <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="pwm">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1000</field>
    </shadow>
  </value>
  <value name="duty">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
</block>
<block type="pwm.freq">
  <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1000</field>
    </shadow>
  </value>
</block>
<block type="pwm.duty">
  <value name="duty">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
</block>
<block type="pwm.init">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="pwm.deinit"></block>
<block type="gpio_interrupt">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

</category>
</category>
<category name="%{DISPLAYS}">
<category name="NeoPixel LED Strip">
<label text="NeoPixel RGB LED Strip"></label>
<button text="%{DOCUMENTATION}: neopixel" callbackKey="loadDoc"></button>
<block type="neopixel_init">
  <value name="pin">
    <shadow type="pinout">
      <field name="Pin"></field>
    </shadow>
  </value>
  <value name="number">
    <shadow type="math_number">
      <field name="NUM">8</field>
    </shadow>
  </value>
</block>
<block type="HSL_to_RGB">
  <value name="hue">
  <shadow type="math_number">
    <field name="NUM">204</field>
  </shadow>
  </value>
  <value name="saturation">
  <shadow type="math_number">
    <field name="NUM">70.8</field>
  </shadow>
  </value>
  <value name="lightness">
  <shadow type="math_number">
    <field name="NUM">52.9</field>
  </shadow>
  </value>
</block>
<block type="neopixel_color_numbers">
 <value name="red">
  <shadow type="math_number">
    <field name="NUM">50</field>
  </shadow>
 </value>
 <value name="green">
  <shadow type="math_number">
    <field name="NUM">152</field>
  </shadow>
 </value>
 <value name="blue">
  <shadow type="math_number">
    <field name="NUM">220</field>
  </shadow>
 </value>
</block>
<block type="neopixel_color_colors"></block>
<block type="neopixel_control">
 <value name="address">
  <shadow type="math_number">
    <field name="NUM">0</field>
  </shadow>
 </value>
 <value name="color">
  <shadow type="neopixel_color_colors">
    <field name="PIN"></field>
  </shadow>
 </value>
</block>
<block type="neopixel_write"></block>
</category>
<category name="Character display">
<label text="PCF8574 Display controller"></label>
<label text="Library: https://github.com/dhylands/python_lcd"></label>
<button text="%{INSTALL_LIBRARY}: I2CLCD" callbackKey="installPyLib"></button>
<block type="char_lcd_init">
  <value name="scl">
    <shadow type="pinout">
      <field name="SCL"></field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="pinout">
     <field name="SDA"></field>
    </shadow>
  </value>
  <value name="lines">
    <shadow type="math_number">
     <field name="NUM">4</field>
    </shadow>
  </value>
  <value name="columns">
    <shadow type="math_number">
      <field name="NUM">20</field>
    </shadow>
  </value>
</block>
<block type="char_lcd_clear"></block>
<block type="char_lcd_putstr"></block>
<block type="char_lcd_moveto"></block>
<block type="char_lcd_backlight"></block>
<block type="char_lcd_display"></block>
</category>
<category name="ST7789 Display">
<label text="ST7789 Display"></label>
<label text="Library: https://github.com/devbis/st7789py_mpy"></label>
<button text="%{INSTALL_LIBRARY}: ST7789" callbackKey="installPyLib"></button>
<block type="st7789_init">
  <value name="spi">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="bl">
    <shadow type="pinout">
      <field name="bl"></field>
    </shadow>
  </value>
  <value name="sck">
    <shadow type="pinout">
      <field name="sck"></field>
    </shadow>
  </value>
  <value name="mosi">
    <shadow type="pinout">
      <field name="mosi"></field>
    </shadow>
  </value>
  <value name="reset">
    <shadow type="pinout">
      <field name="reset"></field>
    </shadow>
  </value>
  <value name="cs">
    <shadow type="pinout">
      <field name="cs"></field>
    </shadow>
  </value>
  <value name="dc">
    <shadow type="pinout">
      <field name="dc"></field>
    </shadow>
  </value>
</block>
<block type="st7789_bl_power">
  <value name="val">
   <shadow type="math_number">
    <field name="NUM">50</field>
   </shadow>
  </value>
</block>
<block type="st7789_color_numbers">
 <value name="red">
  <shadow type="math_number">
    <field name="NUM">50</field>
  </shadow>
 </value>
 <value name="green">
  <shadow type="math_number">
    <field name="NUM">152</field>
  </shadow>
 </value>
 <value name="blue">
  <shadow type="math_number">
    <field name="NUM">220</field>
  </shadow>
 </value>
</block>
<block type="st7789_color_colors"></block>
 <block type="st7789_fill">
  <value name="r">
   <shadow type="math_number">
    <field name="NUM">40</field>
   </shadow>
  </value>
  <value name="g">
   <shadow type="math_number">
    <field name="NUM">40</field>
   </shadow>
  </value>
  <value name="b">
   <shadow type="math_number">
    <field name="NUM">1</field>
   </shadow>
  </value>
</block>
<block type="st7789_pixel">
  <value name="x">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="color">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="st7789_line">
  <value name="x0">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="x1">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y0">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y1">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="color">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
</category>
<category name="OLED Display">
<label text="SSD1306 OLED I2C Display"></label>
<button text="%{INSTALL_LIBRARY}: SSD1306" callbackKey="installPyLib"></button>
<block type="init_oled">
  <value name="i2c">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">4</field>
    </shadow>
  </value>
</block>
<block type="write_oled">
 <value name="x">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="text">
    <shadow type="text">
      <field name="TEXT">Hello</field>
    </shadow>
  </value>
</block>
<block type="show_oled"></block>
<block type="clear_oled"></block>
<block type="fill_oled"></block>
</category>
<category name="LED Matrix">
<label text="TM1640 LED Matrix"></label>
<label text="Library: https://github.com/mcauser/micropython-tm1640"></label>
<button text="%{INSTALL_LIBRARY}: TM1640" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: TM1640" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: TM1640" callbackKey="loadDoc"></button>
<block type="tm1640_init">
 <value name="clk">
    <shadow type="math_number">
      <field name="NUM">14</field>
    </shadow>
  </value>
  <value name="dio">
    <shadow type="math_number">
      <field name="NUM">13</field>
    </shadow>
  </value>
</block>
<block type="tm1640_write">
  <value name="vector">
    <shadow type="text">
      <field name="TEXT">1, 2, 4, 8, 16, 32, 64, 128</field>
    </shadow>
  </value>
</block>
<block type="tm1640_brig">
  <value name="brig">
    <shadow type="math_number">
      <field name="NUM">7</field>
    </shadow>
  </value>
</block>
<block type="tm1640_num">
  <value name="num">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<block type="tm1640_custom">
    <field name="A0">FALSE</field>
    <field name="A1">FALSE</field>
    <field name="A2">FALSE</field>
    <field name="A3">FALSE</field>
    <field name="A4">FALSE</field>
    <field name="A5">FALSE</field>
    <field name="A6">FALSE</field>
    <field name="A7">FALSE</field>
    <field name="B0">FALSE</field>
    <field name="B1">FALSE</field>
    <field name="B2">FALSE</field>
    <field name="B3">FALSE</field>
    <field name="B4">FALSE</field>
    <field name="B5">FALSE</field>
    <field name="B6">FALSE</field>
    <field name="B7">FALSE</field>
    <field name="C0">FALSE</field>
    <field name="C1">FALSE</field>
    <field name="C2">FALSE</field>
    <field name="C3">FALSE</field>
    <field name="C4">FALSE</field>
    <field name="C5">FALSE</field>
    <field name="C6">FALSE</field>
    <field name="C7">FALSE</field>
    <field name="D0">FALSE</field>
    <field name="D1">FALSE</field>
    <field name="D2">FALSE</field>
    <field name="D3">FALSE</field>
    <field name="D4">FALSE</field>
    <field name="D5">FALSE</field>
    <field name="D6">FALSE</field>
    <field name="D7">FALSE</field>
    <field name="E0">FALSE</field>
    <field name="E1">FALSE</field>
    <field name="E2">FALSE</field>
    <field name="E3">FALSE</field>
    <field name="E4">FALSE</field>
    <field name="E5">FALSE</field>
    <field name="E6">FALSE</field>
    <field name="E7">FALSE</field>
    <field name="F0">FALSE</field>
    <field name="F1">FALSE</field>
    <field name="F2">FALSE</field>
    <field name="F3">FALSE</field>
    <field name="F4">FALSE</field>
    <field name="F5">FALSE</field>
    <field name="F6">FALSE</field>
    <field name="F7">FALSE</field>
    <field name="G0">FALSE</field>
    <field name="G1">FALSE</field>
    <field name="G2">FALSE</field>
    <field name="G3">FALSE</field>
    <field name="G4">FALSE</field>
    <field name="G5">FALSE</field>
    <field name="G6">FALSE</field>
    <field name="G7">FALSE</field>
    <field name="H0">FALSE</field>
    <field name="H1">FALSE</field>
    <field name="H2">FALSE</field>
    <field name="H3">FALSE</field>
    <field name="H4">FALSE</field>
    <field name="H5">FALSE</field>
    <field name="H6">FALSE</field>
    <field name="H7">FALSE</field>
</block>
</category>
</category>
  <category name="%{SENSORS}">
  <category name="%{TEMP_HUMI}">
<label text="DHT11/22 Temperature and Humidity Sensor"></label>
<block type="dht_init">
  <field name="BLOCK_DHT_INIT">Start DHT11/22 sensor</field>
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="dht_measure"></block>
<block type="dht_read_temp"></block>
<block type="dht_read_humidity"></block>
<label text="SHT20 I2C Temperature and Humidity Sensor"></label>
<block type="sht20_init">
  <value name="scl">
    <shadow type="math_number">
     <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">21</field>
    </shadow>
  </value>
</block>
<block type="sht20_temperature"></block>
<block type="sht20_humidity"></block>
</category>
<category name="Ultrasound">
<label text="HCSR04 ultrasound distance sensor"></label>
<label text="Library: https://github.com/rsc1975/micropython-hcsr04"></label>
<button text="%{INSTALL_LIBRARY}: HCSR04" callbackKey="installPyLib"></button>
<block type="hcsr_init">
  <field name="BLOCK_HCSR_INIT">Start HCSR04 Ultrasound sensor</field>
  <value name="echo">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="trigger">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="timeout">
    <shadow type="math_number">
      <field name="NUM">10000</field>
    </shadow>
  </value>
</block>
      <block type="hcsr_read"></block>
</category>
<category name="GPS">
<label text="Global Positioning System (GPS) sensor"></label>
<label text="Library: https://github.com/rafaelaroca/mini_micropyGPS"></label>
<button text="%{INSTALL_LIBRARY}: micropyGPS" callbackKey="installPyLib"></button>
<block type="gps_init">
<value name="uart">
  <shadow type="math_number">
    <field name="NUM">2</field>
  </shadow>
</value>
<value name="tx">
  <shadow type="math_number">
    <field name="NUM">17</field>
  </shadow>
</value>
<value name="rx">
  <shadow type="math_number">
    <field name="NUM">16</field>
  </shadow>
</value>
<value name="bps">
  <shadow type="math_number">
    <field name="NUM">38400</field>
  </shadow>
</value>
</block>
<block type="gps_update"> </block>
<block type="gps_coord_format"> </block>
<block type="gps_get_lat"> </block>
<block type="gps_get_long"> </block>
<block type="gps_get_height"> </block>
<block type="gps_get_speed"> </block>
<block type="gps_get_time"> </block>
<block type="gps_get_date"> </block>
<block type="gps_get_countsat"> </block>
<block type="gps_get_satellites_used"> </block>
</category>
<category name="Oximeter">
<label text="MAX30100 pulse oximeter sensor"></label>
<label text="Library: https://github.com/"></label>
<button text="%{INSTALL_LIBRARY}: MAX30100" callbackKey="installPyLib"></button>
<block type="max30100_init"></block>
<block type="max30100_read"></block>
<block type="max30100_red"></block>
<block type="max30100_ir"></block>
</category>
<category name="%{PRESS}">
<label text="BMP180"></label>
<label text="Library: https://github.com/micropython-IMU/micropython-bmp180"></label>
<button text="%{INSTALL_LIBRARY}: BMP180" callbackKey="installPyLib"></button>
<block type="bmp180_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">4</field>
    </shadow>
  </value>
</block>
<block type="bmp180_temperature"> </block>
<block type="bmp180_pressure"> </block>
<block type="bmp180_altitude"> </block>
<label text="BMP280"></label>
<label text="Library: "></label>
<button text="%{INSTALL_LIBRARY}: BMP280" callbackKey="installPyLib"></button>
<block type="bmp280_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">21</field>
    </shadow>
  </value>
</block>
<block type="bmp280_measure"> </block>
<block type="bmp280_sleep"> </block>
<block type="bmp280_temperature"> </block>
<block type="bmp280_pressure"> </block>
</category>
<category name="%{AIR}">
<label text="CCS811 Air Quality Sensor"></label>
<label text="Library: https://github.com/Notthemarsian/CCS811"></label>
<button text="%{INSTALL_LIBRARY}: CCS811" callbackKey="installPyLib"></button>
<block type="ccs811_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">21</field>
    </shadow>
  </value>
</block>
<block type="ccs811_data_ready"> </block>
<block type="ccs811_eCO2"> </block>
<block type="ccs811_tVOC"> </block>
</category>
<category name="%{IMU}">
<label text="MPU6050 IMU"></label>
<label text="Library: https://github.com/"></label>
<button text="%{INSTALL_LIBRARY}: MPU6050" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: MPU6050" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION_HOW}: mpu6050" callbackKey="loadDoc"></button>
<block type="init_mpu6050">
	<value name="scl">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="sda">
	  <shadow type="math_number">
	    <field name="NUM">4</field>
	  </shadow>
	</value>
</block>
<block type="mpu6050_read_acc_x"></block>
<block type="mpu6050_read_acc_y"></block>
<block type="mpu6050_read_acc_z"></block>
<block type="mpu6050_read_gyro_x"></block>
<block type="mpu6050_read_gyro_y"></block>
<block type="mpu6050_read_gyro_z"></block>
<label text="MPU9250 IMU"></label>
<button text="%{INSTALL_LIBRARY}: MPU9250" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: MPU6500" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: AK8963" callbackKey="installPyLib"></button>
<block type="mpu9250_init">
	<value name="scl">
	  <shadow type="math_number">
	   <field name="NUM">22</field>
	  </shadow>
	</value>
	<value name="sda">
	  <shadow type="math_number">
	    <field name="NUM">21</field>
	  </shadow>
	</value>
</block>
<block type="mpu9250_acc"></block>
<block type="mpu9250_gyro"></block>
<block type="mpu9250_mag"></block>
<block type="mpu9250_temp"></block>
</category>
<category name="OneWire">
<label text="OneWire"></label>
<button text="Load example: ds1820" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION_HOW}: ds1820" callbackKey="loadDoc"></button>
<block type="onewire_ds18x20_init">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="onewire_ds18x20_scan"></block>
<block type="onewire_ds18x20_convert"></block>
<block type="onewire_ds18x20_read_temp">
  <value name="rom">
    <shadow type="math_number">
      <field name="NUM">10000</field>
    </shadow>
  </value>
</block>
</category>
<category name="RFID Reader">
<label text="RC522 13.56MHz RFID Reader"></label>
<label text="Library: https://github.com/wendlers/micropython-mfrc522"></label>
<button text="%{INSTALL_LIBRARY}: MFRC522" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: MFRC522" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION_HOW}: mfrc522" callbackKey="loadDoc"></button>
<block type="rfid_rc522_init">
  <value name="sck">
    <shadow type="pinout">
      <field name="SCK"></field>
    </shadow>
  </value>
  <value name="mosi">
    <shadow type="pinout">
      <field name="MOSI"></field>
    </shadow>
  </value>
   <value name="miso">
    <shadow type="pinout">
      <field name="MISO"></field>
    </shadow>
  </value>
  <value name="rst">
    <shadow type="pinout">
      <field name="RST"></field>
    </shadow>
  </value>
  <value name="cs">
    <shadow type="pinout">
      <field name="RST"></field>
    </shadow>
  </value>
</block>
<block type="rfid_rc522_detect_card"></block>
<block type="rfid_rc522_anticoll"></block>
<block type="rfid_rc522_read_card"></block>
<block type="rfid_rc522_write_card"></block>
</category>
<category name="Rotatory Encoder">
<label text="Rotatory Incremental Encoder"></label>
<button text="%{LOAD_EXAMPLE}: encoder" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION_HOW}: encoder" callbackKey="loadDoc"></button>
<block type="encoder_init">
  <value name="p0">
    <shadow type="pinout">
      <field name="ch0"></field>
    </shadow>
  </value>
  <value name="p1">
    <shadow type="pinout">
      <field name="ch1"></field>
    </shadow>
  </value>
</block>
<block type="encoder_reset"></block>
<block type="encoder_read"></block>
</category>
<category name="Camera (ESP32CAM)">
<label text="OV2640 Camera on ESP32-CAM Board"></label>
<button text="%{LOAD_EXAMPLE}: esp32cam" callbackKey="loadExample"></button>
<label text="More info: https://rafaelaroca.wordpress.com/2021/07/15/esp32-camera-micropython-and-no-esptool/"></label>
<block type="esp32_cam_init"></block>
<block type="esp32_cam_capture"></block>
<block type="esp32_cam_red_led"></block>
<block type="esp32_cam_white_led"></block>
</category>
<category name="BME680">
<label text="BME680 Sensor"></label>
<button text="%{INSTALL_LIBRARY}: bme680" callbackKey="installPyLib"></button>
<block type="esp32_bme680_init"> 
  <value name="BME_680_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">118</field>
    </shadow>
  </value>
  <value name="I2C_ID">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<block type="esp32_bme680_read_humidity">
  <value name="BME_680_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">118</field>
    </shadow>
  </value>
</block>
<block type="esp32_bme680_read_pressure">
  <value name="BME_680_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">118</field>
    </shadow>
  </value>
</block>
<block type="esp32_bme680_read_temperature">
  <value name="BME_680_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">118</field>
    </shadow>
  </value>
</block>
    <block type="esp32_bme680_read_gas">
  <value name="BME_680_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">118</field>
    </shadow>
  </value>
</block>

</category>
<category name="SGP30">
<label text="SGP30 Sensor"></label>
<button text="%{INSTALL_LIBRARY}: sgp30" callbackKey="installPyLib"></button>
<block type="esp32_sgp30_init"> 
  <value name="SGP30">
    <shadow type="math_number">
      <field name="NUM">88</field>
    </shadow>
  </value>
  <value name="I2C_ID">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>

<block type="esp32_sgp30_read_co2">
  <value name="SGP30_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">88</field>
    </shadow>
  </value>
</block>
    <block type="esp32_sgp30_read_tvoc">
  <value name="SGP30_ADDRESS">
    <shadow type="math_number">
      <field name="NUM">88</field>
    </shadow>
  </value>
</block>
</category>
</category>
<category name="%{OUTPUTS}">
<category name="Relay">
<label text="Relay"></label>
<block type="relay_switch">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
</category>
<category name="I/O Expander">
<label text="I/O Expander"></label>
<label text="MCP23017"></label>
<button text="%{INSTALL_LIBRARY}: MCP23017" callbackKey="installPyLib"></button>
<label text="Library source: https://github.com/ShrimpingIt/micropython-mcp230xx/blob/master/mcp.py"></label>
<block type="mcp23017_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
     <field name="NUM">21</field>
    </shadow>
  </value>
</block>
<block type="mcp23017_setup"></block>
<block type="mcp23017_output"></block>
<block type="mcp23017_input"></block>
</category>
<category name="RC Servo Motor">
<label text="Hobby RC Servo Motor"></label>
<block type="init_servo">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>
<block type="move_servo">
  <value name="angle">
    <shadow type="math_number">
      <field name="NUM">90</field>
    </shadow>
  </value>
</block>
</category>
<category name="Stepper Motor">
<label text="Stepper Motor"></label>
<block type="stepper_init">
  <value name="p0">
    <shadow type="pinout">
      <field name="Pin0"></field>
    </shadow>
  </value>
  <value name="p1">
    <shadow type="pinout">
      <field name="Pin1"></field>
    </shadow>
  </value>
  <value name="p2">
    <shadow type="pinout">
      <field name="Pin2"></field>
    </shadow>
  </value>
  <value name="p3">
    <shadow type="pinout">
      <field name="Pin3"></field>
    </shadow>
  </value>
</block>
<block type="stepper_step">
 <value name="steps">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
</category>
<category name="DC Motor">
<label text="DC Motor"></label>
<block type="dc_motor_init">
  <value name="pwm">
    <shadow type="pinout">
      <field name="PWM"></field>
    </shadow>
  </value>
  <value name="dir1">
    <shadow type="pinout">
      <field name="Dir1"></field>
    </shadow>
  </value>
  <value name="dir2">
    <shadow type="pinout">
      <field name="Dir2"></field>
    </shadow>
  </value>
</block>
<block type="dc_motor_power">
 <value name="power">
    <shadow type="math_number">
      <field name="NUM">70</field>
    </shadow>
  </value>
</block>
<block type="dc_motor_direction">
 <value name="dir">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="dc_motor_stop"></block>
</category>
<category name="%{SOUNDS}">
<label text="Sounds and RTTTL:"></label>
<label text="Ring Tone Text Transfer Language (RTTTL) "></label>
<button text="%{INSTALL_LIBRARY}: rtttl" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: songs" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: songs" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION_HOW}: sound" callbackKey="loadDoc"></button>
<block type="tone"> 
  <value name="pin">
    <shadow type="pinout">
      <field name="pin"></field>
    </shadow>
  </value>
 <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1200</field>
    </shadow>
  </value>
 <value name="duration">
    <shadow type="math_number">
      <field name="NUM">-1</field>
    </shadow>
  </value>
</block>
<block type="note"> 
  <value name="pin">
    <shadow type="pinout">
      <field name="pin"></field>
    </shadow>
  </value>
  <value name="note">
    <shadow type="tone_type">
      <field name="note"></field>
    </shadow>
  </value>
 <value name="duration">
    <shadow type="math_number">
      <field name="NUM">-1</field>
    </shadow>
  </value>
</block>
<block type="tone_type"></block>
<block type="rtttl_play"> 
  <value name="pin">
    <shadow type="pinout">
      <field name="pin"></field>
    </shadow>
  </value>
  <value name="song">
    <shadow type="text">
      <field name="TEXT">Super Mario - Main Theme</field>
    </shadow>
  </value>
</block>
<block type="text"> <field name="TEXT">Super Mario - Main Theme</field> </block>
<block type="text"> <field name="TEXT">Super Mario - Title Music</field> </block>
<block type="text"> <field name="TEXT">SMBtheme</field> </block>
<block type="text"> <field name="TEXT">SMBwater</field> </block>
<block type="text"> <field name="TEXT">SMBunderground</field> </block>
<block type="text"> <field name="TEXT">Picaxe</field> </block>
<block type="text"> <field name="TEXT">Simpsons</field> </block>
<block type="text"> <field name="TEXT">Indiana</field> </block>
<block type="text"> <field name="TEXT">TakeOnMe</field> </block>
<block type="text"> <field name="TEXT">Entertainer</field> </block>
<block type="text"> <field name="TEXT">Muppets</field> </block>
<block type="text"> <field name="TEXT">Xfiles</field> </block>
<block type="text"> <field name="TEXT">Looney</field> </block>
<block type="text"> <field name="TEXT">20thCenFox</field> </block>
<block type="text"> <field name="TEXT">Bond</field> </block>
<block type="text"> <field name="TEXT">MASH</field> </block>
<block type="text"> <field name="TEXT">StarWars</field> </block>
<block type="text"> <field name="TEXT">GoodBad</field> </block>
<block type="text"> <field name="TEXT">TopGun</field> </block>
<block type="text"> <field name="TEXT">A-Team</field> </block>
<block type="text"> <field name="TEXT">Flintstones</field> </block>
<block type="text"> <field name="TEXT">Jeopardy</field> </block>
<block type="text"> <field name="TEXT">Gadget</field> </block>
<block type="text"> <field name="TEXT">Smurfs</field> </block>
<block type="text"> <field name="TEXT">MahnaMahna</field> </block>
<block type="text"> <field name="TEXT">LeisureSuit</field> </block>
<block type="text"> <field name="TEXT">MissionImp</field> </block>
</category>
</category>
<category name="%{COMM}">
<category name="UART">
<label text="UART Serial Port"></label>
<block type="uart_init"></block>
<block type="uart_write"></block>
<block type="uart_read"></block>
<block type="uart_read_into"></block>
<block type="uart_readline"></block>
<block type="uart_read_all"></block>
</category>
<category name="SPI">
<label text="SPI"></label>
<block type="machine.SPI_SPI.init"></block>
<block type="machine.SPI_SPI.deinit"></block>
<block type="machine.SPI_SPI.read"></block>
<block type="machine.SPI_SPI.readinto"></block>
<block type="machine.SPI_SPI.write"></block>
<block type="machine.SPI_SPI.write_readinto"></block>
</category>
<category name="GSM Modem">
<block type="gsm_modem_init"></block>
<block type="gsm_modem_send_sms"></block>
<block type="gsm_modem_send_at"></block>
<block type="gsm_modem_http_get"></block>
<block type="gsm_modem_response"></block>
</category>
<category name="I2C">
<label text="I2c"></label>
<block type="machine.I2C_I2C.init">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  <value name="scl_pin">
    <shadow type="math_number">
      <field name="NUM">7</field>
    </shadow>
  </value>
  <value name="sda_pin">
    <shadow type="math_number">
      <field name="NUM">6</field>
    </shadow>
  </value>
  <value name="I2C_frequency">
    <shadow type="math_number">
      <field name="NUM">400000</field>
    </shadow>
  </value>
</block>
<block type="machine.I2C_I2C.deinit">
    <value name="I2C_ID">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.scan">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.start">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.stop">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readinto">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.write">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom_into">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.writeto">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.writevto">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom_mem">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom_mem_into">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.writeto_mem">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
</category>
</category>
<category name="%{FILES}">
<label text="Read and write files"></label>
<block type="file_open"> 
  <value name="file_name">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>
<block type="file_open_write"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>
<block type="file_open_read"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>
<block type="file_write"> 
  <value name="data">
    <shadow type="text">
      <field name="TEXT">contents</field>
    </shadow>
  </value>
</block>
<block type="file_write_line"> 
  <value name="data">
    <shadow type="text">
      <field name="TEXT">Line contents</field>
    </shadow>
  </value>
</block>
<block type="file_write_byte"> 
  <value name="data">
    <shadow type="math_number">
      <field name="NUM">80</field>
    </shadow>
  </value>
</block>
<block type="file_read"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>
<block type="file_close"> 
  <value name="filename">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>

<label text="Disk file operations"></label>
<block type="files_list"></block>
<block type="uos_mkdir">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>
<block type="uos_remove">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">file.txt</field>
    </shadow>
  </value>
</block>
<label text="SD Card"></label>
<block type="sd_mount">
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">/sd</field>
    </shadow>
  </value>
</block>
<block type="sd_mount_custom">
  <value name="slot">
    <shadow type="math_number">
      <field name="NUM">2</field>
    </shadow>
  </value>
  <value name="sck">
    <shadow type="math_number">
      <field name="NUM">18</field>
    </shadow>
  </value>
  <value name="miso">
    <shadow type="math_number">
      <field name="NUM">19</field>
    </shadow>
  </value>
  <value name="mosi">
    <shadow type="math_number">
      <field name="NUM">23</field>
    </shadow>
  </value>
  <value name="cs">
    <shadow type="math_number">
      <field name="NUM">15</field>
    </shadow>
  </value>
  <value name="freq">
    <shadow type="math_number">
      <field name="NUM">20000000</field>
    </shadow>
  </value>
  <value name="pIn">
    <shadow type="text">
      <field name="TEXT">/sd</field>
    </shadow>
  </value>
</block>
<block type="uos_listdir"></block>
<block type="uos_umount"></block>
<label text="Other file operations"></label>
<block type="uos_listdir"></block>
<block type="uos_uname"></block>
<block type="uos_urandom"></block>
<block type="uos_chdir"></block>
<block type="uos_getcwd"></block>
<block type="uos_ilistdir"></block>
<block type="uos_rmdir"></block>
<block type="uos_rename"></block>
<block type="uos_stat"></block>
<block type="uos_statvfs"></block>
<block type="uos_sync"></block>
<block type="uos_dupterm"></block>
<block type="uos_mount"></block>
<block type="uos_umount"></block>
<block type="uos_readblocks"></block>
<block type="uos_readblocks"></block>
<block type="uos_writeblocks"></block>
<block type="uos_writeblocks"></block>
<block type="uos_ioctl"></block>
</category>
<category name="%{NET}">
<category name="Status and Configure">
<block type="wifi_client_connect">
  <value name="wifi_client_essid">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="wifi_client_key">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="wifi_client_scan_networks"></block>
<block type="net_ap_mode">
  <field name="NAME">Configure Access Point Mode</field>
  <value name="wifi_essid">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="wifi_key">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="net_ifconfig">
  <field name="NET_IFCONFIG">Wifi current IP</field>
</block>
<block type="net_wiznet5k_init"></block>
<block type="net_wiznet5k_isconnected"></block>
<block type="net_wiznet5k_regs"></block>
<block type="net_wiznet5k_ifconfig"></block>
</category>
<category name="HTTP Client">
<label text="HTTP (web) Client"></label>
<label text="GET Method"></label>
<block type="net_get_request"></block>
<block type="net_get_request">
  <value name="URL">
    <block type="text">
      <field name="TEXT">http://</field>
    </block>
  </value>
</block>
<block type="http_get_status"></block>
<block type="http_get_content"></block>
<block type="variables_set" inline="false">
  <field name="VAR">request</field>
  <value name="VALUE">
    <block type="net_get_request">
      <value name="URL">
        <block type="text">
          <field name="TEXT">http://bipes.net.br/test.txt</field>
        </block>
      </value>
    </block>
  </value>
</block>
<variables>
  <variable id="yFH}K(gY?bu!VLT9NYZ.">request</variable>
</variables>
<block type="variables_set" id="!1xIazB)h~sJ/!$o{Sm5" inline="false" x="-613" y="-737">
  <field name="VAR" id="yFH}K(gY?bu!VLT9NYZ.">request</field>
  <value name="VALUE">
  <block type="net_get_request" id="5gsz(fK06Y^Uq!^eqfl^">
  <value name="URL">
  <block type="text" id="$YN]pq|;%B-%rxn[)aK}">
  <field name="TEXT">http://bipes.net.br/test.txt</field>
  </block>
  </value>
  </block>
  </value>
  <next>
  <block type="controls_if" id="gXT.6iyw4xuE[DIT|DlZ">
  <mutation else="1"/>
  <value name="IF0">
  <block type="logic_compare" id="MAl#oabnR*]}v{*w!UzM">
  <field name="OP">EQ</field>
  <value name="A">
  <block type="http_get_status" id="wtKQnU[WC=}H%N;~w)2V">
  <field name="request" id="yFH}K(gY?buUVLT9NYZ.">request</field>
  </block>
  </value>
  <value name="B">
  <block type="math_number" id="tOXrARcB78l}%us2,2?k">
  <field name="NUM">200</field>
  </block>
  </value>
  </block>
  </value>
  <statement name="DO0">
  <block type="text_print" id="~f:U;)0R$FRjhp{cR]@E">
  <value name="TEXT">
  <shadow type="text" id="pr9Ux3[LuPqlVB$8Clx[">
  <field name="TEXT">abc</field>
  </shadow>
  <block type="text_join" id="=(rN|1TYMR;Dm$,@i*q=">
  <mutation items="2"/>
  <value name="ADD0">
  <block type="text" id="CqCB]Gb8.24=oZ!:4sB~">
  <field name="TEXT">Success. Response content: </field>
  </block>
  </value>
  <value name="ADD1">
  <block type="http_get_content" id="EIZ(Vmcg-,^Dt/N7Xc@;">
  <field name="request" id="yFH}K(gY?buUVLT9NYZ.">request</field>
  </block>
  </value>
  </block>
  </value>
  </block>
  </statement>
  <statement name="ELSE">
  <block type="text_print" id="RpdJo2g.#On;%,bM%LRs">
  <value name="TEXT">
  <shadow type="text">
  <field name="TEXT">abc</field>
  </shadow>
  <block type="text_join" id="bazG!D4x;$0/d[t@aG7]">
  <mutation items="2"/>
  <value name="ADD0">
  <block type="text" id="Gq9,.$(51,A0{y*siaQ~">
  <field name="TEXT">Request Error. Status code = </field>
  </block>
  </value>
  <value name="ADD1">
  <block type="http_get_status" id="gZ+~#AOpOjdmdd=2F%e~">
  <field name="request" id="yFH}K(gY?buUVLT9NYZ.">request</field>
  </block>
  </value>
  </block>
  </value>
  </block>
  </statement>
  </block>
  </next>
</block>
<label text="POST Method"></label>
<block type="net_post_request">
  <field name="NET_POST_REQUEST_URL">Make HTTP POST Request URL</field>
  <field name="NET_POST_REQUEST_DATA">Data</field>
</block>
<block type="net_post_request_json"></block>
</category>
<category name="HTTP Server">
<label text="HTTP Web Server"></label>
<button text="%{LOAD_EXAMPLE}: webserver" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: webserver" callbackKey="loadDoc"></button>
<block type="net_http_server_start">
  <value name="port">
    <shadow type="math_number">
      <field name="NUM">80</field>
    </shadow>
  </value>
</block>
<block type="net_http_server_accept"></block>
<block type="net_http_server_requested_page"></block>
<block type="net_http_server_send_response">
  <value name="html">
    <shadow type="text">
      <field name="TEXT">You reached BIPES WebServer!</field>
    </shadow>
  </value>
</block>
<block type="net_http_server_send_response_jpg"></block>
<block type="net_http_server_close"></block>
</category>
<category name="EMAIL">
<label text="Email sender using uMail"></label>
<label text="Library: https://github.com/shawwwn/uMail"></label>
<button text="%{INSTALL_LIBRARY}: umail" callbackKey="installPyLib"></button>
<button text="%{DOCUMENTATION}: uMail" callbackKey="loadDoc"></button>
<block type="umail_init">
  <value name="host">
    <shadow type="text">
     <field name="TEXT">smtp.gmail.com</field>
    </shadow>
  </value>
  <value name="port">
    <shadow type="math_number">
      <field name="NUM">587</field>
    </shadow>
  </value>
  <value name="username">
    <shadow type="text">
      <field name="TEXT">email@gmail.com</field>
    </shadow>
  </value>
    <value name="password">
    <shadow type="text">
      <field name="TEXT">gmail_password</field>
    </shadow>
  </value>
</block>
<block type="umail_send">
<value name="to">
    <shadow type="text">
      <field name="TEXT">email@email.com</field>
    </shadow>
  </value>
  <value name="subject">
    <shadow type="text">
      <field name="TEXT">Email from BIPES!</field>
    </shadow>
  </value>
  <value name="contents">
    <shadow type="text">
      <field name="TEXT">BIPES is nice!</field>
    </shadow>
  </value>
</block>
</category>
<category name="NTP Time">
<label text="Network Time Protocol (NTP)"></label>
<label text="Adjusts RTC using Internet"></label>
<button text="Load example: ntp" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: ntp" callbackKey="loadDoc"></button>
<block type="net_ntp_sync">
  <value name="tz">
    <shadow type="math_number">
     <field name="NUM">3</field>
    </shadow>
  </value>
</block>
</category>
<category name="TCP/IP Socket">
<label text="TCP/IP Socket"></label>
<button text="%{LOAD_EXAMPLE}: starwars" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: sockets" callbackKey="loadDoc"></button>
<block type="net_socket_connect">
  <value name="host">
    <shadow type="text">
      <field name="TEXT">towel.blinkenlights.nl</field>
    </shadow>
  </value>
  <value name="port">
    <shadow type="math_number">
      <field name="NUM">23</field>
    </shadow>
  </value>
</block>
<block type="net_socket_receive">
	<value name="bytes">
      <shadow type="math_number">
        <field name="NUM">500</field>
      </shadow>
    </value>
</block>
<block type="net_socket_send">
 <value name="bytes">
    <shadow type="text">
      <field name="TEXT">Hello</field>
    </shadow>
  </value>
</block>
<block type="net_socket_close"></block>
</category>
<category name="MQTT">
<label text="MQTT (Message Queue Telemetry Transport)"></label>
<block type="mqtt_init">
  <field name="BLOCK_MQTT_INIT">Start MQTT Client</field>
  <value name="server">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="port">
    <shadow type="math_number">
      <field name="NUM">1883</field>
    </shadow>
  </value>
  <value name="user">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="password">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="mqtt_add_to_buffer">
  <field name="BLOCK_MQTT_ADD_TO_BUFFER">Add data to MQTT Buffer</field>
  <value name="fieldname">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <field name="MQTT_VALUE">Value</field>
</block>
<block type="mqtt_publish_buffer">
  <field name="BLOCK_MQTT_PUBLISH">Publish Buffer to MQTT Topic</field>
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="mqtt_publish_payload">
  <field name="BLOCK_MQTT_PUBLISH">Publish Payload to MQTT Topic</field>
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="payload">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="mqtt_set_callback">
  <field name="BLOCK_MQTT_SET_CALLBACK">Set Callback to MQTT Messages</field>
  <field name="MQTT_CALLBACK">Callback Function</field>
</block>
<block type="mqtt_subscribe">
  <field name="BLOCK_MQTT_SUBSCRIBE">Subscribe to MQTT Topic</field>
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="mqtt_check_msg">
  <field name="BLOCK_MQTT_CHECK_MSG">Check for MQTT Server messages</field>
</block><block type="mqtt_wait_msg">
  <field name="BLOCK_MQTT_WAIT_MSG">Wait for MQTT Server messages</field>
</block>
<block type="mqtt_disconnect">
  <field name="BLOCK_MQTT_DISCONNECT">Disconnect MQTT Client</field>
</block>
</category>
<category name="EasyMQTT">
<label text="IoT: EasyMQTT"></label>
<block type="easymqtt_init"></block>
<block type="easymqtt_publish_data">
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="data">
    <shadow type="math_number">
      <field name="NUM"></field>
    </shadow>
  </value>
</block>
<block type="easymqtt_publish_axis">
  <value name="ADD0">
    <shadow type="utime.vars">
      <field name="VARS">ticks_ms</field>
    </shadow>
  </value>
</block>
<block type="easymqtt_subscribe">
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="easymqtt_receive_data"></block>
<block type="easymqtt_disconnect">
  <field name="BLOCK_EASYMQTT_DISCONNECT">EasyMQTT Stop</field>
</block>
</category>
<category name="Bluetooth REPL">
<label text="Bluetooth REPL"></label>
<label text="This block allows terminal/console access using bluetooth."></label>
<label text="Library: https://github.com/micropython/micropython/tree/master/examples/bluetooth"></label>
<label text="You need to install 3 files to use:"></label>
<button text="%{INSTALL_LIBRARY}: ble_advertising" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: ble_uart_peripheral" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: ble_uart_repl" callbackKey="installPyLib"></button>
<label text="Web Bluetooth REPL"></label>
<label text="Usage:"></label>
<label text="1. Install the 3 files above"></label>
<label text="2. Start Web Bluetooth REPL"></label>
<label text="3. Pair the ESP32 with your device /"></label>
<label text="4. Go to https://bipes.net.br/beta2/ui/"></label>
<label text="5. Select the bluetooth option and Connect (Web Bluetooth)"></label>
<block type="bluetooth_repl_setup">
  <value name="name">
    <shadow type="text">
      <field name="TEXT">BIPES-BLE</field>
    </shadow>
  </value>
</block>
<block type="bluetooth_repl_start">
    <value name="name">
    <shadow type="text">
     <field name="TEXT">BIPES-BLE</field>
    </shadow>
  </value>
</block>
</category>
<category name="WebREPL">
<label text="WebREPL"></label>
<block type="webrepl_setup"></block>
      <block type="webrepl_start"></block>
</category>
<category name="CAN Bus">
<label text="Controller Area Network (CAN)"></label>
<label text="Requires specific firmware"></label>
<label text="Compatible with: https://github.com/micropython/micropython/issues/5087#issuecomment-538779410"></label>
<button text="%{LOAD_EXAMPLES}: esp32_can" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: esp32_can" callbackKey="loadDoc"></button>
<block type="esp32_can_init"></block>
<block type="esp32_can_filter"></block>
<block type="esp32_can_send"></block>
<block type="esp32_can_recv"></block>
</category>
<category name="Google Sheets">
<label text="Send files to a Google Spreadsheet"></label>
<label text="Library: https://gist.github.com/SpotlightKid/8637c685626b334e5c0ec341dd269c44"></label>
<button text="%{INSTALL_LIBRARY}: prequests" callbackKey="installPyLib"></button>
<block type="google_spreadsheet">
  <field name="sheet_num">1</field>
  <value name="deploy_code">
    <shadow type="text">
      <field name="TEXT">Deploy code</field>
    </shadow>
  </value>
  <statement name="cells_values">
    <block type="cell_value">
      <value name="value">
        <shadow type="text">
          <field name="TEXT">Content</field>
        </shadow>
      </value>
    </block>
  </statement>
</block>
<block type="cell_value">
  <value name="value">
    <shadow type="text">
      <field name="TEXT">content</field>
    </shadow>
  </value>
</block>
</category>
</category>
<category name="%{CONTROL}">
<category name="PID">
<button text="%{INSTALL_LIBRARY}: PID" callbackKey="installPyLib"></button>
<label text="Proportional–integral–derivative Controller"></label>
<label text="https://github.com/gastmaier/micropython-simple-pid"></label>
<button text="%{DOCUMENTATION}: simple_pid" callbackKey="loadDoc"></button>
<button text="%{LOAD_EXAMPLE}: PID_water_boiler" callbackKey="loadExample"></button>
<button text="%{LOAD_EXAMPLE}: PID_thermal_plant_ds1820" callbackKey="loadExample"></button>
<button text="%{LOAD_EXAMPLE}: PID_dc_motor_interrupt" callbackKey="loadExample"></button>
<block type="control_pid.__init__">
  <value name="SETPOINT">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="control_pid.compute"></block>
<block type="control_pid.compute_not_realtime"></block>
<block type="control_pid.tunings">
  <value name="KP">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="KI">
    <shadow type="math_number">
     <field name="NUM">0</field>
    </shadow>
  </value>
  <value name="KD">
    <shadow type="math_number">
     <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<block type="control_pid.setpoint">
  <value name="SETPOINT">
    <shadow type="math_number">
     <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="control_pid.auto_mode"></block>
<block type="control_pid.output_limits"></block>
<block type="control_pid.vars"></block>
<!--
<block type="control-pid-reset"></block>
-->
</category>
<category name="%{SIMULATE}">
<button text="%{INSTALL_LIBRARY}: PID" callbackKey="installPyLib"></button>
<label text="Realtime simulation:"></label>
<button text="%{LOAD_EXAMPLE}: PID_water_boiler" callbackKey="loadExample"></button>
<block type="simulate_water_boiler"></block>
<label text="Non realtime simulation:"></label>
<button text="%{LOAD_EXAMPLE}: PID_dc_motor" callbackKey="loadExample"></button>
<block type="simulate_dcmotor.sim"></block>
<block type="simulate_dcmotor.vars"></block>W
</category>
</category>
<category name="micropython">
<category name="btree">
<block type="btree_open"></block>
<block type="btree_btree.close"></block>
<block type="btree_btree.flush"></block>
<block type="btree_btree.__getitem__"></block>
<block type="btree_btree.__iter__"></block>
<block type="btree_btree.keys"></block>
</category>
<category name="builtins">
<block type="builtins_abs"></block>
<block type="builtins_all"></block>
<block type="builtins_any"></block>
<block type="builtins_bin"></block>
<block type="builtins_callable"></block>
<block type="builtins_chr"></block>
<block type="builtins_classmethod"></block>
<block type="builtins_compile"></block>
<block type="builtins_delattr"></block>
<block type="builtins_dir"></block>
<block type="builtins_divmod"></block>
<block type="builtins_enumerate"></block>
<block type="builtins_eval"></block>
<block type="builtins_exec"></block>
<block type="builtins_filter"></block>
<block type="builtins_getattr"></block>
<block type="builtins_globals"></block>
<block type="builtins_hasattr"></block>
<block type="builtins_hash"></block>
<block type="builtins_hex"></block>
<block type="builtins_id"></block>
<block type="builtins_input"></block>
<block type="builtins_to_bytes"></block>
<block type="builtins_isinstance"></block>
<block type="builtins_issubclass"></block>
<block type="builtins_iter"></block>
<block type="builtins_len"></block>
<block type="builtins_locals"></block>
<block type="builtins_map"></block>
<block type="builtins_max"></block>
<block type="builtins_min"></block>
<block type="builtins_next"></block>
<block type="builtins_oct"></block>
<block type="builtins_open"></block>
<block type="builtins_ord"></block>
<block type="builtins_pow"></block>
<block type="builtins_print"></block>
<block type="builtins_property"></block>
<block type="builtins_range"></block>
<block type="builtins_repr"></block>
<block type="builtins_reversed"></block>
<block type="builtins_round"></block>
<block type="builtins_setattr"></block>
<block type="builtins_sorted"></block>
<block type="builtins_staticmethod"></block>
<block type="builtins_sum"></block>
<block type="builtins_super"></block>
<block type="builtins_type"></block>
<block type="builtins_zip"></block>
</category>
<category name="cmath">
<block type="cmath_cos"></block>
<block type="cmath_exp"></block>
<block type="cmath_log"></block>
<block type="cmath_log10"></block>
<block type="cmath_phase"></block>
<block type="cmath_polar"></block>
<block type="cmath_rect"></block>
<block type="cmath_sin"></block>
<block type="cmath_sqrt"></block>
</category>
<category name="esp32">
<block type="esp32_wake_on_touch"></block>
<block type="esp32_wake_on_ext0"></block>
<block type="esp32_wake_on_ext1"></block>
<block type="esp32_raw_temperature"></block>
<block type="esp32_hall_sensor"></block>
<block type="esp32_idf_heap_info"></block>
<block type="esp32_Partition.info"></block>
<block type="esp32_Partition.readblocks"></block>
<block type="esp32_Partition.readblocks"></block>
<block type="esp32_Partition.writeblocks"></block>
<block type="esp32_Partition.writeblocks"></block>
<block type="esp32_Partition.ioctl"></block>
<block type="esp32_Partition.set_boot"></block>
<block type="esp32_Partition.get_next_update"></block>
<block type="esp32_RMT.source_freq"></block>
<block type="esp32_RMT.clock_div"></block>
<block type="esp32_RMT.wait_done"></block>
<block type="esp32_RMT.loop"></block>
<block type="esp32_RMT.write_pulses"></block>
<block type="esp32_ULP.set_wakeup_period"></block>
<block type="esp32_ULP.load_binary"></block>
<block type="esp32_ULP.run"></block>
</category>
<category name="esp">
<block type="esp_sleep_type"></block>
<block type="esp_deepsleep"></block>
<block type="esp_flash_id"></block>
<block type="esp_flash_size"></block>
<block type="esp_flash_user_start"></block>
<block type="esp_flash_read"></block>
<block type="esp_flash_write"></block>
<block type="esp_flash_erase"></block>
<block type="esp_set_native_code_location"></block>
</category>
<category name="framebuf">
<block type="framebuf_FrameBuffer.fill"></block>
<block type="framebuf_FrameBuffer.pixel"></block>
<block type="framebuf_FrameBuffer.hline"></block>
<block type="framebuf_FrameBuffer.vline"></block>
<block type="framebuf_FrameBuffer.line"></block>
<block type="framebuf_FrameBuffer.rect"></block>
<block type="framebuf_FrameBuffer.fill_rect"></block>
<block type="framebuf_FrameBuffer.text"></block>
<block type="framebuf_FrameBuffer.scroll"></block>
<block type="framebuf_FrameBuffer.blit"></block>
</category>
<category name="gc">
<block type="gc_enable"></block>
<block type="gc_disable"></block>
<block type="gc_collect"></block>
<block type="gc_mem_alloc"></block>
<block type="gc_mem_free"></block>
<block type="gc_threshold"></block>
</category>
<category name="lcd160cr">
<block type="lcd160cr_LCD160CR.set_power"></block>
<block type="lcd160cr_LCD160CR.set_orient"></block>
<block type="lcd160cr_LCD160CR.set_brightness"></block>
<block type="lcd160cr_LCD160CR.set_i2c_addr"></block>
<block type="lcd160cr_LCD160CR.set_uart_baudrate"></block>
<block type="lcd160cr_LCD160CR.set_startup_deco"></block>
<block type="lcd160cr_LCD160CR.save_to_flash"></block>
<block type="lcd160cr_LCD160CR.set_pixel"></block>
<block type="lcd160cr_LCD160CR.get_pixel"></block>
<block type="lcd160cr_LCD160CR.get_line"></block>
<block type="lcd160cr_LCD160CR.screen_dump"></block>
<block type="lcd160cr_LCD160CR.screen_load"></block>
<block type="lcd160cr_LCD160CR.set_pos"></block>
<block type="lcd160cr_LCD160CR.set_text_color"></block>
<block type="lcd160cr_LCD160CR.set_font"></block>
<block type="lcd160cr_LCD160CR.write"></block>
<block type="lcd160cr_LCD160CR.set_pen"></block>
<block type="lcd160cr_LCD160CR.erase"></block>
<block type="lcd160cr_LCD160CR.dot"></block>
<block type="lcd160cr_LCD160CR.rect"></block>
<block type="lcd160cr_LCD160CR.rect_outline"></block>
<block type="lcd160cr_LCD160CR.rect_interior"></block>
<block type="lcd160cr_LCD160CR.line"></block>
<block type="lcd160cr_LCD160CR.dot_no_clip"></block>
<block type="lcd160cr_LCD160CR.rect_no_clip"></block>
<block type="lcd160cr_LCD160CR.rect_outline_no_clip"></block>
<block type="lcd160cr_LCD160CR.rect_interior_no_clip"></block>
<block type="lcd160cr_LCD160CR.line_no_clip"></block>
<block type="lcd160cr_LCD160CR.poly_dot"></block>
<block type="lcd160cr_LCD160CR.poly_line"></block>
<block type="lcd160cr_LCD160CR.touch_config"></block>
<block type="lcd160cr_LCD160CR.is_touched"></block>
<block type="lcd160cr_LCD160CR.get_touch"></block>
<block type="lcd160cr_LCD160CR.set_spi_win"></block>
<block type="lcd160cr_LCD160CR.fast_spi"></block>
<block type="lcd160cr_LCD160CR.show_framebuf"></block>
<block type="lcd160cr_LCD160CR.set_scroll"></block>
<block type="lcd160cr_LCD160CR.set_scroll_win"></block>
<block type="lcd160cr_LCD160CR.set_scroll_win_param"></block>
<block type="lcd160cr_LCD160CR.set_scroll_buf"></block>
<block type="lcd160cr_LCD160CR.jpeg"></block>
<block type="lcd160cr_LCD160CR.jpeg_start"></block>
<block type="lcd160cr_LCD160CR.jpeg_data"></block>
<block type="lcd160cr_LCD160CR.feed_wdt"></block>
<block type="lcd160cr_LCD160CR.reset"></block>
</category>
<category name="machine.ADC">
<block type="machine.ADC_ADC.read_u16"></block>
</category>
<category name="machine.ADCWiPy">
<block type="machine.ADCWiPy_ADCWiPy.channel"></block>
<block type="machine.ADCWiPy_ADCWiPy.init"></block>
<block type="machine.ADCWiPy_ADCWiPy.deinit"></block>
<block type="machine.ADCWiPy_adcchannel"></block>
<block type="machine.ADCWiPy_adcchannel.value"></block>
<block type="machine.ADCWiPy_adcchannel.init"></block>
<block type="machine.ADCWiPy_adcchannel.deinit"></block>
</category>
<category name="machine.I2C">
<block type="machine.I2C_I2C.init">
                                          <!-- Start of new code -->
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  <value name="scl_pin">
    <shadow type="math_number">
      <field name="NUM">7</field>
    </shadow>
  </value>
  <value name="sda_pin">
    <shadow type="math_number">
      <field name="NUM">6</field>
    </shadow>
  </value>
  <value name="I2C_frequency">
    <shadow type="math_number">
      <field name="NUM">400000</field>
    </shadow>
  </value>
                                          <!-- End of new code -->
  </block>
<block type="machine.I2C_I2C.deinit">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.scan">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.start">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.stop">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readinto">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.write">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom_into">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.writeto">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.writevto">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom_mem">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.readfrom_mem_into">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
<block type="machine.I2C_I2C.writeto_mem">
    <value name="I2C_ID">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
</block>
</category>
<category name="machine.Pin">
<block type="machine.Pin_Pin.init"></block>
<block type="machine.Pin_Pin.value"></block>
<block type="machine.Pin_Pin.__call__"></block>
<block type="machine.Pin_Pin.on"></block>
<block type="machine.Pin_Pin.off"></block>
<block type="machine.Pin_Pin.mode"></block>
<block type="machine.Pin_Pin.pull"></block>
<block type="machine.Pin_Pin.drive"></block>
<block type="machine.Pin_Pin.irq"></block>
</category>
<category name="machine">
<block type="machine_reset"></block>
<block type="machine_soft_reset"></block>
<block type="machine_reset_cause"></block>
<block type="machine_disable_irq"></block>
<block type="machine_enable_irq"></block>
<block type="machine_freq"></block>
<block type="machine_idle"></block>
<block type="machine_sleep"></block>
<block type="machine_lightsleep"></block>
<block type="machine_wake_reason"></block>
<block type="machine_unique_id"></block>
<block type="machine_time_pulse_us"></block>
<block type="machine_rng"></block>
</category>
<category name="machine.RTC">
<block type="machine.RTC_RTC.init"></block>
<block type="machine.RTC_RTC.now"></block>
<block type="machine.RTC_RTC.deinit"></block>
<block type="machine.RTC_RTC.alarm"></block>
<block type="machine.RTC_RTC.alarm_left"></block>
<block type="machine.RTC_RTC.cancel"></block>
<block type="machine.RTC_RTC.irq"></block>
</category>
<category name="machine.SDCard">
</category>
<category name="machine.SD">
<block type="machine.SD_SD.init"></block>
<block type="machine.SD_SD.deinit"></block>
</category>
<category name="machine.Signal">
<block type="machine.Signal_Signal.value"></block>
<block type="machine.Signal_Signal.on"></block>
<block type="machine.Signal_Signal.off"></block>
</category>
<category name="machine.SPI">
<block type="machine.SPI_SPI.init"></block>
<block type="machine.SPI_SPI.deinit"></block>
<block type="machine.SPI_SPI.read"></block>
<block type="machine.SPI_SPI.readinto"></block>
<block type="machine.SPI_SPI.write"></block>
<block type="machine.SPI_SPI.write_readinto"></block>
</category>
<category name="machine.Timer">
<block type="machine.Timer_Timer.init"></block>
<block type="machine.Timer_Timer.deinit"></block>
</category>
<category name="machine.TimerWiPy">
<block type="machine.TimerWiPy_TimerWiPy.init"></block>
<block type="machine.TimerWiPy_TimerWiPy.deinit"></block>
<block type="machine.TimerWiPy_TimerWiPy.channel"></block>
<block type="machine.TimerWiPy_timerchannel.irq"></block>
<block type="machine.TimerWiPy_timerchannel.freq"></block>
<block type="machine.TimerWiPy_timerchannel.period"></block>
<block type="machine.TimerWiPy_timerchannel.duty_cycle"></block>
</category>
<category name="machine.UART">
<block type="machine.UART_UART.init"></block>
<block type="machine.UART_UART.deinit"></block>
<block type="machine.UART_UART.any"></block>
<block type="machine.UART_UART.read"></block>
<block type="machine.UART_UART.readinto"></block>
<block type="machine.UART_UART.readline"></block>
<block type="machine.UART_UART.write"></block>
<block type="machine.UART_UART.sendbreak"></block>
<block type="machine.UART_UART.irq"></block>
</category>
<category name="machine.WDT">
<block type="machine.WDT_wdt.feed"></block>
</category>
<category name="math">
<block type="math_acos"></block>
<block type="math_acosh"></block>
<block type="math_asin"></block>
<block type="math_asinh"></block>
<block type="math_atan"></block>
<block type="math_atan2"></block>
<block type="math_atanh"></block>
<block type="math_ceil"></block>
<block type="math_copysign"></block>
<block type="math_cos"></block>
<block type="math_cosh"></block>
<block type="math_degrees"></block>
<block type="math_erf"></block>
<block type="math_erfc"></block>
<block type="math_exp"></block>
<block type="math_expm1"></block>
<block type="math_fabs"></block>
<block type="math_floor"></block>
<block type="math_fmod"></block>
<block type="math_frexp"></block>
<block type="math_gamma"></block>
<block type="math_isfinite"></block>
<block type="math_isinf"></block>
<block type="math_isnan"></block>
<block type="math_ldexp"></block>
<block type="math_lgamma"></block>
<block type="math_log"></block>
<block type="math_log10"></block>
<block type="math_log2"></block>
<block type="math_modf"></block>
<block type="math_pow"></block>
<block type="math_radians"></block>
<block type="math_sin"></block>
<block type="math_sinh"></block>
<block type="math_sqrt"></block>
<block type="math_tan"></block>
<block type="math_tanh"></block>
<block type="math_trunc"></block>
</category>
<category name="micropython">
<block type="micropython_const"></block>
<block type="micropython_opt_level"></block>
<block type="micropython_alloc_emergency_exception_buf"></block>
<block type="micropython_mem_info"></block>
<block type="micropython_qstr_info"></block>
<block type="micropython_stack_use"></block>
<block type="micropython_heap_lock"></block>
<block type="micropython_heap_unlock"></block>
<block type="micropython_heap_locked"></block>
<block type="micropython_kbd_intr"></block>
<block type="micropython_schedule"></block>
</category>
<category name="network">
<block type="network_AbstractNIC.active"></block>
<block type="network_AbstractNIC.connect"></block>
<block type="network_AbstractNIC.disconnect"></block>
<block type="network_AbstractNIC.isconnected"></block>
<block type="network_AbstractNIC.scan"></block>
<block type="network_AbstractNIC.status"></block>
<block type="network_AbstractNIC.ifconfig"></block>
<block type="network_AbstractNIC.config"></block>
<block type="network_phy_mode"></block>
</category>
<category name="pyb">
<block type="pyb_delay"></block>
<block type="pyb_udelay"></block>
<block type="pyb_millis"></block>
<block type="pyb_micros"></block>
<block type="pyb_elapsed_millis"></block>
<block type="pyb_elapsed_micros"></block>
<block type="pyb_hard_reset"></block>
<block type="pyb_bootloader"></block>
<block type="pyb_fault_debug"></block>
<block type="pyb_disable_irq"></block>
<block type="pyb_enable_irq"></block>
<block type="pyb_freq"></block>
<block type="pyb_wfi"></block>
<block type="pyb_stop"></block>
<block type="pyb_standby"></block>
<block type="pyb_have_cdc"></block>
<block type="pyb_hid"></block>
<block type="pyb_info"></block>
<block type="pyb_main"></block>
<block type="pyb_mount"></block>
<block type="pyb_repl_uart"></block>
<block type="pyb_rng"></block>
<block type="pyb_sync"></block>
<block type="pyb_unique_id"></block>
<block type="pyb_usb_mode"></block>
</category>
<category name="sys">
<block type="sys_exit"></block>
<block type="sys_atexit"></block>
<block type="sys_print_exception"></block>
</category>
<category name="_thread">
</category>
<category name="uarray">
<block type="uarray_append"></block>
<block type="uarray_extend"></block>
</category>
<category name="uasyncio">
<block type="uasyncio_create_task"></block>
<block type="uasyncio_run"></block>
<block type="uasyncio_sleep"></block>
<block type="uasyncio_sleep_ms"></block>
<block type="uasyncio_wait_for"></block>
<block type="uasyncio_gather"></block>
<block type="uasyncio_Task.cancel"></block>
<block type="uasyncio_Event.is_set"></block>
<block type="uasyncio_Event.set"></block>
<block type="uasyncio_Event.clear"></block>
<block type="uasyncio_Event.wait"></block>
<block type="uasyncio_Lock.locked"></block>
<block type="uasyncio_Lock.acquire"></block>
<block type="uasyncio_Lock.release"></block>
<block type="uasyncio_open_connection"></block>
<block type="uasyncio_start_server"></block>
<block type="uasyncio_Stream.get_extra_info"></block>
<block type="uasyncio_Stream.close"></block>
<block type="uasyncio_Stream.wait_closed"></block>
<block type="uasyncio_Stream.read"></block>
<block type="uasyncio_Stream.readline"></block>
<block type="uasyncio_Stream.write"></block>
<block type="uasyncio_Stream.drain"></block>
<block type="uasyncio_Server.close"></block>
<block type="uasyncio_Server.wait_closed"></block>
<block type="uasyncio_get_event_loop"></block>
<block type="uasyncio_new_event_loop"></block>
<block type="uasyncio_Loop.create_task"></block>
<block type="uasyncio_Loop.run_forever"></block>
<block type="uasyncio_Loop.run_until_complete"></block>
<block type="uasyncio_Loop.stop"></block>
<block type="uasyncio_Loop.close"></block>
<block type="uasyncio_Loop.set_exception_handler"></block>
<block type="uasyncio_Loop.get_exception_handler"></block>
<block type="uasyncio_Loop.default_exception_handler"></block>
<block type="uasyncio_Loop.call_exception_handler"></block>
</category>
<category name="ubinascii">
<block type="ubinascii_hexlify"></block>
<block type="ubinascii_unhexlify"></block>
<block type="ubinascii_a2b_base64"></block>
<block type="ubinascii_b2a_base64"></block>
</category>
<category name="ubluetooth">
<block type="ubluetooth_BLE.active"></block>
<block type="ubluetooth_BLE.config"></block>
<block type="ubluetooth_BLE.irq"></block>
<block type="ubluetooth_BLE.gap_advertise"></block>
<block type="ubluetooth_BLE.gap_scan"></block>
<block type="ubluetooth_BLE.gatts_register_services"></block>
<block type="ubluetooth_BLE.gatts_read"></block>
<block type="ubluetooth_BLE.gatts_write"></block>
<block type="ubluetooth_BLE.gatts_notify"></block>
<block type="ubluetooth_BLE.gatts_set_buffer"></block>
<block type="ubluetooth_BLE.gap_connect"></block>
<block type="ubluetooth_BLE.gap_disconnect"></block>
<block type="ubluetooth_BLE.gattc_discover_services"></block>
<block type="ubluetooth_BLE.gattc_discover_characteristics"></block>
<block type="ubluetooth_BLE.gattc_discover_descriptors"></block>
<block type="ubluetooth_BLE.gattc_read"></block>
<block type="ubluetooth_BLE.gattc_write"></block>
</category>
<category name="ucollections">
<block type="ucollections_deque"></block>
<block type="ucollections_deque.append"></block>
<block type="ucollections_deque.popleft"></block>
<block type="ucollections_namedtuple"></block>
<block type="ucollections_OrderedDict"></block>
</category>
<category name="ucryptolib">
<block type="ucryptolib_encrypt"></block>
<block type="ucryptolib_decrypt"></block>
</category>
<category name="uctypes">
<block type="uctypes_sizeof"></block>
<block type="uctypes_addressof"></block>
<block type="uctypes_bytes_at"></block>
<block type="uctypes_bytearray_at"></block>
</category>
<category name="uerrno">
</category>
<category name="uhashlib">
<block type="uhashlib_hash.update"></block>
<block type="uhashlib_hash.digest"></block>
<block type="uhashlib_hash.hexdigest"></block>
</category>
<category name="uheapq">
<block type="uheapq_heappush"></block>
<block type="uheapq_heappop"></block>
<block type="uheapq_heapify"></block>
</category>
<category name="uio">
<block type="uio_open"></block>
<block type="uio_getvalue"></block>
</category>
<category name="ujson">
<block type="ujson_dump"></block>
<block type="ujson_dumps"></block>
<block type="ujson_load"></block>
<block type="ujson_loads"></block>
</category>
<category name="uos">
<block type="uos_uname"></block>
<block type="uos_urandom"></block>
<block type="uos_chdir"></block>
<block type="uos_getcwd"></block>
<block type="uos_ilistdir"></block>
<block type="uos_listdir"></block>
<block type="uos_mkdir"></block>
<block type="uos_remove"></block>
<block type="uos_rmdir"></block>
<block type="uos_rename"></block>
<block type="uos_stat"></block>
<block type="uos_statvfs"></block>
<block type="uos_sync"></block>
<block type="uos_dupterm"></block>
<block type="uos_mount"></block>
<block type="uos_umount"></block>
<block type="uos_readblocks"></block>
<block type="uos_readblocks"></block>
<block type="uos_writeblocks"></block>
<block type="uos_writeblocks"></block>
<block type="uos_ioctl"></block>
</category>
<category name="ure">
<block type="ure_compile"></block>
<block type="ure_match"></block>
<block type="ure_search"></block>
<block type="ure_sub"></block>
<block type="ure_regex.match"></block>
<block type="ure_regex.split"></block>
<block type="ure_match.group"></block>
<block type="ure_match.groups"></block>
<block type="ure_match.start"></block>
<block type="ure_match.span"></block>
</category>
<category name="uselect">
<block type="uselect_poll"></block>
<block type="uselect_select"></block>
<block type="uselect_poll.register"></block>
<block type="uselect_poll.unregister"></block>
<block type="uselect_poll.modify"></block>
<block type="uselect_poll.poll"></block>
<block type="uselect_poll.ipoll"></block>
</category>
<category name="usocket">
<block type="usocket_socket"></block>
<block type="usocket_getaddrinfo"></block>
<block type="usocket_inet_ntop"></block>
<block type="usocket_inet_pton"></block>
<block type="usocket_socket.close"></block>
<block type="usocket_socket.bind"></block>
<block type="usocket_socket.listen"></block>
<block type="usocket_socket.accept"></block>
<block type="usocket_socket.connect"></block>
<block type="usocket_socket.send"></block>
<block type="usocket_socket.sendall"></block>
<block type="usocket_socket.recv"></block>
<block type="usocket_socket.sendto"></block>
<block type="usocket_socket.recvfrom"></block>
<block type="usocket_socket.setsockopt"></block>
<block type="usocket_socket.settimeout"></block>
<block type="usocket_socket.setblocking"></block>
<block type="usocket_socket.makefile"></block>
<block type="usocket_socket.read"></block>
<block type="usocket_socket.readinto"></block>
<block type="usocket_socket.readline"></block>
<block type="usocket_socket.write"></block>
</category>
<category name="ussl">
<block type="ussl_ussl.wrap_socket"></block>
</category>
<category name="ustruct">
<block type="ustruct_calcsize"></block>
<block type="ustruct_pack"></block>
<block type="ustruct_pack_into"></block>
<block type="ustruct_unpack"></block>
<block type="ustruct_unpack_from"></block>
</category>
<category name="utime">
<block type="utime_localtime"></block>
<block type="utime_mktime"></block>
<block type="utime_sleep"></block>
<block type="utime_sleep_ms"></block>
<block type="utime_sleep_us"></block>
<block type="utime_ticks_ms"></block>
<block type="utime_ticks_us"></block>
<block type="utime_ticks_cpu"></block>
<block type="utime_ticks_add"></block>
<block type="utime_ticks_diff"></block>
<block type="utime_time"></block>
</category>
<category name="uzlib">
<block type="uzlib_decompress"></block>
</category>
<category name="wipy">
<block type="wipy_heartbeat"></block>
</category>
</category>
</xml>
`

