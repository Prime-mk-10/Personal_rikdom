// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('active');
});

// Vertical navigation
document.querySelectorAll('.vertical-btn').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        // Update active button
        document.querySelectorAll('.vertical-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update active content
        document.querySelectorAll('.vertical-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
        
        // Update nav links
        document.querySelectorAll('#mainNav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-vertical') === target) {
                link.classList.add('active');
            }
        });
    });
});

// Nav links for verticals
document.querySelectorAll('#mainNav a[data-vertical]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-vertical');
        
        // Update active button
        document.querySelectorAll('.vertical-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === target) {
                btn.classList.add('active');
            }
        });
        
        // Update active content
        document.querySelectorAll('.vertical-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
        
        // Update nav links
        document.querySelectorAll('#mainNav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        document.getElementById('mainNav').classList.remove('active');
        
        // Scroll to verticals section
        document.getElementById('verticales').scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu solicitud. Un consultor se pondrá en contacto contigo en un plazo máximo de 24 horas.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Calculator functions
function calcularCostoFianza() {
    const monto = document.getElementById('montoFianza').value;
    const tipo = document.getElementById('tipoFianza').value;
    
    if (!monto || monto <= 0 || !tipo) {
        alert('Por favor ingresa un monto válido y selecciona un tipo de fianza.');
        return;
    }
    
    const montoNum = parseFloat(monto);
    let porcentaje;
    
    // Porcentajes simulados según tipo de fianza
    switch(tipo) {
        case 'cumplimiento':
            porcentaje = 0.015; // 1.5%
            break;
        case 'anticipo':
            porcentaje = 0.01; // 1%
            break;
        case 'calidad':
            porcentaje = 0.02; // 2%
            break;
        default:
            porcentaje = 0.015;
    }
    
    const costo = montoNum * porcentaje;
    const costoMinimo = 5000; // Costo mínimo
    
    const costoFinal = Math.max(costo, costoMinimo);
    
    document.getElementById('resultadoCostoFianza').innerHTML = 
        `Costo estimado anual: $${costoFinal.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN<br>
         <small>Este costo puede variar según el perfil crediticio y documentación presentada.</small>`;
}

function simularCredito() {
    const monto = document.getElementById('montoCredito').value;
    const plazo = document.getElementById('plazoCredito').value;
    
    if (!monto || monto <= 0 || !plazo || plazo <= 0) {
        alert('Por favor ingresa un monto y plazo válidos.');
        return;
    }
    
    const montoNum = parseFloat(monto);
    const plazoNum = parseInt(plazo);
    
    // Tasa de interés anual simulada
    const tasaAnual = 0.18; // 18% anual
    const tasaMensual = tasaAnual / 12;
    
    // Cálculo de pago mensual con interés compuesto
    const pagoMensual = (montoNum * tasaMensual * Math.pow(1 + tasaMensual, plazoNum)) / 
                        (Math.pow(1 + tasaMensual, plazoNum) - 1);
    
    const totalPagar = pagoMensual * plazoNum;
    const intereses = totalPagar - montoNum;
    
    document.getElementById('resultadoCredito').innerHTML = 
        `Pago mensual estimado: $${pagoMensual.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN<br>
         Total a pagar: $${totalPagar.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN<br>
         Intereses totales: $${intereses.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN<br>
         <small>Tasa referencial del 18% anual. Tasas sujetas a aprobación crediticia.</small>`;
}

function valorarPropiedad() {
    const tipo = document.getElementById('tipoPropiedad').value;
    const metros = document.getElementById('metrosCuadrados').value;
    const zona = document.getElementById('zona').value;
    
    if (!tipo || !metros || !zona) {
        alert('Por favor completa todos los campos.');
        return;
    }
    
    // Simulación de valoración
    const metrosNum = parseFloat(metros);
    let precioPorM2;
    
    // Precios simulados por m2 según tipo de propiedad
    switch(tipo.toLowerCase()) {
        case 'casa':
            precioPorM2 = 25000;
            break;
        case 'departamento':
            precioPorM2 = 30000;
            break;
        case 'local':
            precioPorM2 = 35000;
            break;
        default:
            precioPorM2 = 20000;
    }
    
    // Ajuste por zona (simulado)
    let factorZona = 1.0;
    if (zona.toLowerCase().includes('centro') || zona.toLowerCase().includes('polanco') || zona.toLowerCase().includes('condesa')) {
        factorZona = 1.5;
    } else if (zona.toLowerCase().includes('santa fe') || zona.toLowerCase().includes('interlomas')) {
        factorZona = 1.8;
    }
    
    const valoracion = metrosNum * precioPorM2 * factorZona;
    
    document.getElementById('resultadoValoracion').innerHTML = 
        `Valoración estimada: $${valoracion.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN<br>
         <small>Esta es una estimación preliminar. Para una valoración precisa, solicita un avalúo profesional.</small>`;
}

function calcularCostoAvaluo() {
    const tipo = document.getElementById('tipoAvaluo').value;
    const valor = document.getElementById('valorPropiedad').value;
    
    if (!tipo || !valor || valor <= 0) {
        alert('Por favor completa todos los campos correctamente.');
        return;
    }
    
    const valorNum = parseFloat(valor);
    let costoBase;
    
    // Costos base según tipo de avalúo
    switch(tipo) {
        case 'comercial':
            costoBase = 3500;
            break;
        case 'hipotecario':
            costoBase = 3000;
            break;
        case 'fiscal':
            costoBase = 2800;
            break;
        case 'garantia':
            costoBase = 4000;
            break;
        default:
            costoBase = 3000;
    }
    
    // Ajuste por valor de propiedad
    let porcentajeValor = 0;
    if (valorNum > 1000000) {
        porcentajeValor = valorNum * 0.0005; // 0.05%
    } else if (valorNum > 5000000) {
        porcentajeValor = valorNum * 0.0003; // 0.03%
    }
    
    const costoTotal = costoBase + porcentajeValor;
    
    document.getElementById('resultadoCostoAvaluo').innerHTML = 
        `Costo estimado: $${costoTotal.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})} MXN<br>
         <small>Incluye visita técnica, elaboración de informe y certificación oficial.</small>`;
}