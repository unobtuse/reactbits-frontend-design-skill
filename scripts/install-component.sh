#!/usr/bin/env bash

###############################################################################
# ReactBits Component Installer
#
# Interactive script for installing ReactBits components with variant selection
#
# Usage:
#   ./install-component.sh                    # Interactive mode
#   ./install-component.sh BlurText           # Install specific component
#   ./install-component.sh BlurText TS-TW     # Install with variant
###############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Component categories
TEXT_ANIMATIONS=("BlurText" "TypingEffect" "WavyText" "GlitchText" "GradientText" "FlipText" "ScrambleText" "SplitText")
UI_COMPONENTS=("AnimatedCard" "HoverButton" "ParallaxScroll" "RevealLinks" "InfiniteScroll" "MagneticButton" "GlowingCard" "ExpandableCard" "FloatingDock" "BentoGrid")
BACKGROUNDS=("ParticleBackground" "GradientMesh" "AnimatedGrid" "WaveBackground" "StarField" "DotPattern" "NoiseTexture" "Aurora")
ANIMATIONS=("FadeIn" "SlideIn" "ScaleIn" "RotateIn" "BounceIn" "StaggerChildren" "ScrollReveal" "MorphTransition")

# Variants
VARIANTS=("JS-CSS" "JS-TW" "TS-CSS" "TS-TW")

function print_header() {
    echo -e "${BLUE}"
    echo "╔═══════════════════════════════════════════════╗"
    echo "║     ReactBits Component Installer            ║"
    echo "╚═══════════════════════════════════════════════╝"
    echo -e "${NC}"
}

function print_category() {
    local category=$1
    echo -e "\n${GREEN}$category:${NC}"
}

function print_error() {
    echo -e "${RED}Error: $1${NC}" >&2
}

function print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

function print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

function print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

function select_category() {
    echo -e "\n${BLUE}Select component category:${NC}"
    echo "1) Text Animations"
    echo "2) UI Components"
    echo "3) Backgrounds"
    echo "4) Animations"
    echo "5) Browse all"
    echo "q) Quit"

    read -rp "Enter choice [1-5, q]: " choice

    case $choice in
        1) SELECTED_CATEGORY="text" ;;
        2) SELECTED_CATEGORY="ui" ;;
        3) SELECTED_CATEGORY="backgrounds" ;;
        4) SELECTED_CATEGORY="animations" ;;
        5) SELECTED_CATEGORY="all" ;;
        q|Q) exit 0 ;;
        *)
            print_error "Invalid choice"
            select_category
            ;;
    esac
}

function list_components() {
    local category=$1
    local -n arr=$2

    if [[ "$category" == "all" || "$category" == "$3" ]]; then
        print_category "$4"
        local i=1
        for comp in "${arr[@]}"; do
            echo "  $i) $comp"
            ((i++))
        done
    fi
}

function select_component() {
    if [[ -z "$SELECTED_CATEGORY" ]]; then
        select_category
    fi

    echo ""
    list_components "$SELECTED_CATEGORY" TEXT_ANIMATIONS "text" "Text Animations"
    list_components "$SELECTED_CATEGORY" UI_COMPONENTS "ui" "UI Components"
    list_components "$SELECTED_CATEGORY" BACKGROUNDS "backgrounds" "Backgrounds"
    list_components "$SELECTED_CATEGORY" ANIMATIONS "animations" "Animations"

    echo ""
    read -rp "Enter component name (or number from above): " component_input

    # If input is a number, convert to component name
    if [[ "$component_input" =~ ^[0-9]+$ ]]; then
        # Combine all arrays based on category
        local all_comps=()
        if [[ "$SELECTED_CATEGORY" == "all" || "$SELECTED_CATEGORY" == "text" ]]; then
            all_comps+=("${TEXT_ANIMATIONS[@]}")
        fi
        if [[ "$SELECTED_CATEGORY" == "all" || "$SELECTED_CATEGORY" == "ui" ]]; then
            all_comps+=("${UI_COMPONENTS[@]}")
        fi
        if [[ "$SELECTED_CATEGORY" == "all" || "$SELECTED_CATEGORY" == "backgrounds" ]]; then
            all_comps+=("${BACKGROUNDS[@]}")
        fi
        if [[ "$SELECTED_CATEGORY" == "all" || "$SELECTED_CATEGORY" == "animations" ]]; then
            all_comps+=("${ANIMATIONS[@]}")
        fi

        local idx=$((component_input - 1))
        if [[ $idx -ge 0 && $idx -lt ${#all_comps[@]} ]]; then
            COMPONENT_NAME="${all_comps[$idx]}"
        else
            print_error "Invalid component number"
            select_component
            return
        fi
    else
        COMPONENT_NAME="$component_input"
    fi

    print_success "Selected component: $COMPONENT_NAME"
}

function select_variant() {
    echo -e "\n${BLUE}Select variant:${NC}"
    echo "1) JS-CSS   (JavaScript + CSS)"
    echo "2) JS-TW    (JavaScript + Tailwind)"
    echo "3) TS-CSS   (TypeScript + CSS)"
    echo "4) TS-TW    (TypeScript + Tailwind) [Recommended]"

    read -rp "Enter choice [1-4]: " variant_choice

    case $variant_choice in
        1) VARIANT="JS-CSS" ;;
        2) VARIANT="JS-TW" ;;
        3) VARIANT="TS-CSS" ;;
        4|"") VARIANT="TS-TW" ;;  # Default
        *)
            print_error "Invalid choice, using TS-TW"
            VARIANT="TS-TW"
            ;;
    esac

    print_success "Selected variant: $VARIANT"
}

function check_dependencies() {
    # Check if npx is available
    if ! command -v npx &> /dev/null; then
        print_error "npx not found. Please install Node.js and npm."
        exit 1
    fi

    # Check if in a React project
    if [[ ! -f "package.json" ]]; then
        print_warning "No package.json found. Are you in a React project directory?"
        read -rp "Continue anyway? [y/N]: " continue_choice
        if [[ ! "$continue_choice" =~ ^[Yy]$ ]]; then
            exit 0
        fi
    fi

    # Check for Tailwind if TW variant selected
    if [[ "$VARIANT" == *"TW"* ]] && [[ -f "package.json" ]]; then
        if ! grep -q "tailwindcss" package.json; then
            print_warning "Tailwind CSS not found in package.json"
            print_info "You may need to install and configure Tailwind CSS"
        fi
    fi
}

function install_component() {
    local full_name="${COMPONENT_NAME}-${VARIANT}"
    local package_name="@react-bits/${full_name}"

    print_info "Installing $full_name..."

    # Run shadcn add command
    if npx shadcn@latest add "$package_name"; then
        print_success "Successfully installed $full_name"
        echo ""
        print_info "Component installed to: src/components/reactbits/"
        print_info "Import with: import { $COMPONENT_NAME } from '@/components/reactbits/$full_name'"

        return 0
    else
        print_error "Failed to install $full_name"
        print_info "You can manually install by:"
        print_info "1. Visit https://reactbits.dev"
        print_info "2. Find '$COMPONENT_NAME' component"
        print_info "3. Select variant '$VARIANT'"
        print_info "4. Copy the code manually"

        return 1
    fi
}

function show_usage_example() {
    echo ""
    echo -e "${BLUE}Usage Example:${NC}"
    echo ""

    case $COMPONENT_NAME in
        BlurText|TypingEffect|WavyText|GlitchText|GradientText|FlipText|ScrambleText|SplitText)
            echo "import { $COMPONENT_NAME } from '@/components/reactbits/${COMPONENT_NAME}-${VARIANT}'"
            echo ""
            echo "<$COMPONENT_NAME"
            echo "  text=\"Your text here\""
            echo "  className=\"text-4xl font-bold\""
            echo "/>"
            ;;
        ParticleBackground|GradientMesh|AnimatedGrid|WaveBackground|StarField|DotPattern|NoiseTexture|Aurora)
            echo "import { $COMPONENT_NAME } from '@/components/reactbits/${COMPONENT_NAME}-${VARIANT}'"
            echo ""
            echo "<div className=\"relative h-screen\">"
            echo "  <$COMPONENT_NAME className=\"absolute inset-0\" />"
            echo "  <div className=\"relative z-10\">"
            echo "    {/* Your content */}"
            echo "  </div>"
            echo "</div>"
            ;;
        AnimatedCard|GlowingCard|ExpandableCard)
            echo "import { $COMPONENT_NAME } from '@/components/reactbits/${COMPONENT_NAME}-${VARIANT}'"
            echo ""
            echo "<$COMPONENT_NAME className=\"p-6\">"
            echo "  <h3>Card Title</h3>"
            echo "  <p>Card content...</p>"
            echo "</$COMPONENT_NAME>"
            ;;
        FadeIn|SlideIn|ScaleIn|RotateIn|BounceIn)
            echo "import { $COMPONENT_NAME } from '@/components/reactbits/${COMPONENT_NAME}-${VARIANT}'"
            echo ""
            echo "<$COMPONENT_NAME duration={400} delay={0}>"
            echo "  <div>Your content</div>"
            echo "</$COMPONENT_NAME>"
            ;;
        *)
            echo "import { $COMPONENT_NAME } from '@/components/reactbits/${COMPONENT_NAME}-${VARIANT}'"
            echo ""
            echo "<$COMPONENT_NAME>"
            echo "  {/* Your content */}"
            echo "</$COMPONENT_NAME>"
            ;;
    esac
}

function install_another() {
    echo ""
    read -rp "Install another component? [Y/n]: " another
    if [[ ! "$another" =~ ^[Nn]$ ]]; then
        main_interactive
    fi
}

function main_interactive() {
    print_header

    select_component
    select_variant
    check_dependencies

    echo ""
    read -rp "Install ${COMPONENT_NAME}-${VARIANT}? [Y/n]: " confirm
    if [[ "$confirm" =~ ^[Nn]$ ]]; then
        print_info "Installation cancelled"
        exit 0
    fi

    if install_component; then
        show_usage_example
        install_another
    fi
}

function main_direct() {
    local component=$1
    local variant=${2:-TS-TW}

    COMPONENT_NAME="$component"
    VARIANT="$variant"

    print_header
    print_info "Installing $COMPONENT_NAME with variant $VARIANT"

    check_dependencies
    install_component
    show_usage_example
}

# Main execution
if [[ $# -eq 0 ]]; then
    # Interactive mode
    main_interactive
else
    # Direct mode with arguments
    main_direct "$@"
fi
