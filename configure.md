---
layout: page
title: Configure Deck Layout
permalink: /configuration/
nav_order: 4
---

<div class="container">
    <section id="controls">
        <h2>Labware Setup</h2>
        <form id="labware-form">
            <label for="labware">Select Labware:</label>
            <select id="labware" name="labware">
                <!-- To add other labware options look at JS file -->
            </select>
            <label for="deck-location">Deck Location:</label>
            <select id="deck-location" name="deck-location"></select>
            <button class="add-labware" type="button" onclick="addLabware()">Add Labware</button>
        </form>
				<!--
        <div id="labware-list">
             Dynamically added labware list 
        </div>
        -->
        <h2>Liquid Setup</h2>
        <form id="liquid-form">
            <label for="liquid">Enter Liquid:</label>
            <input type="text" id="liquid" name="liquid">
            <label for="storage-labware">Storage Labware:</label>
            <select id="storage-labware" name="storage-labware">
                <option value="50ml">50 ml Falcon Tube</option>
                <option value="15ml">15 ml Falcon Tube</option>
                <option value="15ml">1.5 ml Eppendorf Tube</option>
                <option value="15ml">2 ml Eppendorf Tube</option>
                <!-- Add other storage labware options as needed -->
            </select>
            <button type="button" onclick="addLiquid()">Add Liquid</button>
        </form>
				<!--
        <div id="liquid-list">
             Dynamically added liquid list 
        </div>
        -->
    </section>
    <section id="summary">
        <h2>Summary</h2>
        <div id="summary-list">
            <!-- Summary of labware and liquids -->
        </div>
    </section>
    <section id="deck-schematic">
        <h2>Deck Layout</h2>
        <div class="deck">
            <div class="deck-cell" data-position="10">10</div>
            <div class="deck-cell" data-position="11">11</div>
            <div class="deck-cell waste" data-position="Waste">Waste</div>
            <div class="deck-cell" data-position="7">7</div>
            <div class="deck-cell" data-position="8">8</div>
            <div class="deck-cell" data-position="9">9</div>
            <div class="deck-cell" data-position="4">4</div>
            <div class="deck-cell" data-position="5">5</div>
            <div class="deck-cell" data-position="6">6</div>
            <div class="deck-cell" data-position="1">1</div>
            <div class="deck-cell" data-position="2">2</div>
            <div class="deck-cell" data-position="3">3</div>
        </div>
    </section>
</div>
<script src="{{ site.url }}/scripts/configuration.js"></script>
<link rel="stylesheet" href="{{ site.url }}/styles/CFstyles.css">